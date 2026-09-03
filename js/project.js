/**
 * Populates project.html from the PROJECTS array in data.js,
 * based on the ?p=<slug> query parameter, applying Kazakh/Russian
 * overrides from js/i18n.js when the language is switched.
 */
(function () {
  "use strict";

  const params = new URLSearchParams(location.search);
  const slug = params.get("p");
  const project = PROJECTS.find((p) => p.slug === slug) || PROJECTS[0];

  if (!project) {
    document.getElementById("main").innerHTML =
      '<div class="container section text-center"><h1 class="display-md">Project not found</h1><p><a href="work.html" style="text-decoration:underline;">Back to work</a></p></div>';
    return;
  }

  const setText = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };

  function render() {
    const lang = getLang();
    const localized = projectI18n(project, lang);
    const catLabels = project.categories.map((c) => categoryLabel(c, lang)).join(" · ");
    const brand = t("brand_name", lang);

    document.title = `${project.title} — ${brand}`;
    setText("doc-title", `${project.title} — ${brand}`);
    document.getElementById("meta-description").setAttribute("content", localized.blurb);
    document
      .getElementById("og-title")
      .setAttribute("content", `${project.title} — ${brand}`);
    document.getElementById("og-description").setAttribute("content", localized.blurb);
    if (project.video.poster) {
      document.getElementById("og-image").setAttribute("content", project.video.poster);
    }

    setText("p-title", project.title);
    setText("p-blurb", localized.blurb);
    setText("p-client", project.client);
    setText("p-year", project.year);
    setText("p-role", localized.role);
    setText("p-cats", catLabels);
    setText("p-description", localized.description);

    // Credits (name stays as written; role is localized)
    const creditsEl = document.getElementById("p-credits");
    creditsEl.innerHTML = localized.credits
      .map((c) => `<li><span>${c.name}</span><span class="role">${c.role}</span></li>`)
      .join("");

    // Tools — software names aren't translated
    const toolsEl = document.getElementById("p-tools");
    toolsEl.innerHTML = project.tools
      .map((tool) => `<span class="tool-tag">${tool}</span>`)
      .join("");

    // Next project (wraps around) — title stays as written (proper noun)
    const idx = PROJECTS.findIndex((p) => p.slug === project.slug);
    const next = PROJECTS[(idx + 1) % PROJECTS.length];
    document.getElementById("next-project-link").href = `project.html?p=${next.slug}`;
    setText("next-project-title", next.title);
  }

  // Video sources and the breakdown block's visibility only need
  // setting once — they don't change with language.
  const mainVideo = document.getElementById("main-video");
  mainVideo.src = project.video.src;
  if (project.video.poster) mainVideo.poster = project.video.poster;

  if (project.breakdown) {
    document.getElementById("breakdown-block").style.display = "block";
    const bd = document.getElementById("breakdown-video");
    bd.src = project.breakdown.src;
    if (project.breakdown.poster) bd.poster = project.breakdown.poster;
  }

  document.getElementById("year").textContent = new Date().getFullYear();

  render();
  window.addEventListener("langchange", render);
})();
