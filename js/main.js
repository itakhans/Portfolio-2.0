/**
 * SHARED SITE BEHAVIOR
 * Runs on every page. Project-grid and project-detail specific
 * logic lives in js/work.js and js/project.js.
 */
(function () {
  "use strict";

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.querySelector(".nav-toggle");
  const root = document.documentElement;
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      const open = root.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", String(open));
    });
    document.querySelectorAll(".main-nav a").forEach((a) =>
      a.addEventListener("click", () => root.classList.remove("nav-open"))
    );
  }

  /* ---------- Header solid-on-scroll ---------- */
  const header = document.querySelector(".site-header");
  if (header) {
    const onScroll = () => {
      header.classList.toggle("is-solid", window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Scroll-triggered reveals ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length && !prefersReducedMotion) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el, i) => {
      el.style.transitionDelay = prefersReducedMotion ? "0ms" : `${(i % 6) * 60}ms`;
      io.observe(el);
    });
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------- Custom cursor (desktop + motion-comfortable only) ---------- */
  if (!prefersReducedMotion && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    document.body.classList.add("cursor-enabled");
    const dot = document.createElement("div");
    dot.className = "cursor-dot";
    dot.setAttribute("aria-hidden", "true");
    document.body.appendChild(dot);

    let x = 0, y = 0, cx = 0, cy = 0;
    window.addEventListener("mousemove", (e) => { x = e.clientX; y = e.clientY; });
    (function loop() {
      cx += (x - cx) * 0.25;
      cy += (y - cy) * 0.25;
      dot.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
      requestAnimationFrame(loop);
    })();

    document.querySelectorAll("[data-cursor-hover]").forEach((el) => {
      el.addEventListener("mouseenter", () => dot.classList.add("is-hover"));
      el.addEventListener("mouseleave", () => dot.classList.remove("is-hover"));
    });
  }

  /* ---------- Lazy-load videos: only load src when near viewport ---------- */
  const lazyVideos = document.querySelectorAll("video[data-src]");
  if (lazyVideos.length) {
    const vio = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const v = entry.target;
            const src = v.getAttribute("data-src");
            if (src && !v.src) {
              v.src = src;
              v.load();
              if (v.hasAttribute("data-autoplay")) {
                v.play().catch(() => {
                  /* autoplay blocked — user can press play */
                });
              }
            }
            vio.unobserve(v);
          }
        });
      },
      { rootMargin: "200px" }
    );
    lazyVideos.forEach((v) => vio.observe(v));
  }

  /* ---------- Generic custom player controls ---------- */
  const ICON_PLAY = '<svg viewBox="0 0 24 24"><polygon points="6,4 20,12 6,20"/></svg>';
  const ICON_PAUSE = '<svg viewBox="0 0 24 24"><rect x="5" y="4" width="5" height="16"/><rect x="14" y="4" width="5" height="16"/></svg>';
  const ICON_MUTED = '<svg viewBox="0 0 24 24"><path d="M4 9v6h4l5 5V4L8 9H4zm12.5 3l3-3-1-1-3 3-3-3-1 1 3 3-3 3 1 1 3-3 3 3 1-1-3-3z"/></svg>';
  const ICON_UNMUTED = '<svg viewBox="0 0 24 24"><path d="M4 9v6h4l5 5V4L8 9H4zm11.5 3a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4zM13 1.5v2.06c3.4.9 6 3.98 6 7.44s-2.6 6.55-6 7.44v2.06c4.5-.93 8-4.92 8-9.5s-3.5-8.57-8-9.5z"/></svg>';

  document.querySelectorAll("[data-player]").forEach((wrap) => {
    const video = wrap.querySelector("video");
    const playBtn = wrap.querySelector("[data-play]");
    const muteBtn = wrap.querySelector("[data-mute]");
    const scrub = wrap.querySelector("[data-scrub]");
    const scrubFill = wrap.querySelector("[data-scrub-fill]");
    const timeEl = wrap.querySelector("[data-time]");
    if (!video) return;

    const fmt = (s) => {
      if (!isFinite(s)) return "00:00";
      const m = Math.floor(s / 60).toString().padStart(2, "0");
      const sec = Math.floor(s % 60).toString().padStart(2, "0");
      return `${m}:${sec}`;
    };

    const updatePlayIcon = () => {
      if (!playBtn) return;
      playBtn.innerHTML = video.paused ? ICON_PLAY : ICON_PAUSE;
      playBtn.setAttribute("aria-label", video.paused ? "Play" : "Pause");
    };

    if (playBtn) {
      playBtn.addEventListener("click", () => {
        video.paused ? video.play() : video.pause();
      });
      video.addEventListener("play", updatePlayIcon);
      video.addEventListener("pause", updatePlayIcon);
      updatePlayIcon();
    }

    if (muteBtn) {
      const updateMuteIcon = () => {
        muteBtn.innerHTML = video.muted ? ICON_MUTED : ICON_UNMUTED;
        muteBtn.setAttribute("aria-label", video.muted ? "Unmute" : "Mute");
      };
      muteBtn.addEventListener("click", () => {
        video.muted = !video.muted;
        updateMuteIcon();
      });
      updateMuteIcon();
    }

    if (scrub && scrubFill) {
      video.addEventListener("timeupdate", () => {
        const pct = (video.currentTime / (video.duration || 1)) * 100;
        scrubFill.style.width = `${pct}%`;
        if (timeEl) timeEl.textContent = `${fmt(video.currentTime)} / ${fmt(video.duration)}`;
      });
      scrub.addEventListener("click", (e) => {
        const rect = scrub.getBoundingClientRect();
        const pct = (e.clientX - rect.left) / rect.width;
        video.currentTime = pct * (video.duration || 0);
      });
    }
  });

  /* ---------- Cinema mode ---------- */
  document.querySelectorAll("[data-cinema-open]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const overlay = document.querySelector(".cinema-overlay");
      const sourceVideo = document.querySelector(btn.getAttribute("data-cinema-open"));
      if (!overlay || !sourceVideo) return;
      const cinemaVideo = overlay.querySelector("video");
      cinemaVideo.src = sourceVideo.currentSrc || sourceVideo.src;
      cinemaVideo.currentTime = sourceVideo.currentTime;
      overlay.classList.add("is-open");
      cinemaVideo.play().catch(() => {});
      sourceVideo.pause();
      document.body.style.overflow = "hidden";
    });
  });
  document.querySelectorAll("[data-cinema-close]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const overlay = document.querySelector(".cinema-overlay");
      if (!overlay) return;
      const cinemaVideo = overlay.querySelector("video");
      cinemaVideo.pause();
      overlay.classList.remove("is-open");
      document.body.style.overflow = "";
    });
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const overlay = document.querySelector(".cinema-overlay.is-open");
      if (overlay) overlay.querySelector("[data-cinema-close]").click();
    }
  });

  /* ---------- Hero sound toggle (home page) ---------- */
  const soundToggle = document.querySelector("[data-sound-toggle]");
  if (soundToggle) {
    const heroVideo = document.querySelector(".hero-media");
    soundToggle.addEventListener("click", () => {
      if (!heroVideo) return;
      heroVideo.muted = !heroVideo.muted;
      soundToggle.textContent = heroVideo.muted ? "▸ SOUND OFF" : "▸ SOUND ON";
      soundToggle.setAttribute("aria-pressed", String(!heroVideo.muted));
    });
  }
})();
