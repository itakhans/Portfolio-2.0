/**
 * Populates project.html from the PROJECTS array in data.js,
 * based on the ?p=<slug> query parameter.
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

  const catLabels = project.categories
    .map((c) => (CATEGORIES.find((x) => x.id === c) || {}).label || c)
    .join(" · ");

  document.title = `${project.title} — Jordan Reyes`;
  const setText = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };
  setText("doc-title", `${project.title} — Jordan Reyes`);
  document.getElementById("meta-description").setAttribute("content", project.blurb);
  document.getElementById("og-title").setAttribute("content", `${project.title} — Jordan Reyes, Motion Designer`);
  document.getElementById("og-description").setAttribute("content", project.blurb);
  if (project.video.poster) {
    document.getElementById("og-image").setAttribute("content", project.video.poster);
  }

  setText("p-title", project.title);
  setText("p-blurb", project.blurb);
  setText("p-client", project.client);
  setText("p-year", project.year);
  setText("p-role", project.role);
  setText("p-cats", catLabels);
  setText("p-description", project.description);

  // Main video
  const mainVideo = document.getElementById("main-video");
  mainVideo.src = project.video.src;
  if (project.video.poster) mainVideo.poster = project.video.poster;

  // Credits
  const creditsEl = document.getElementById("p-credits");
  creditsEl.innerHTML = project.credits
    .map((c) => `<li><span>${c.name}</span><span class="role">${c.role}</span></li>`)
    .join("");

  // Tools
  const toolsEl = document.getElementById("p-tools");
  toolsEl.innerHTML = project.tools.map((t) => `<span class="tool-tag">${t}</span>`).join("");

  // Breakdown (optional)
  if (project.breakdown) {
    document.getElementById("breakdown-block").style.display = "block";
    const bd = document.getElementById("breakdown-video");
    bd.src = project.breakdown.src;
    if (project.breakdown.poster) bd.poster = project.breakdown.poster;
  }

  // Next project (wraps around)
  const idx = PROJECTS.findIndex((p) => p.slug === project.slug);
  const next = PROJECTS[(idx + 1) % PROJECTS.length];
  document.getElementById("next-project-link").href = `project.html?p=${next.slug}`;
  setText("next-project-title", next.title);

  document.getElementById("year").textContent = new Date().getFullYear();
})();
