const visualField = document.getElementById("visualField");
const homeReset = document.getElementById("homeReset");
const mainStage = document.getElementById("mainStage");

const filterButtons = document.querySelectorAll(".filter-button");
const projectButtons = document.querySelectorAll(".project-button");
const siteHeader = document.querySelector(".site-header");

const projectOverlay = document.getElementById("projectOverlay");
const projectShell = document.getElementById("projectShell");
const projectCode = document.getElementById("projectCode");
const projectRail = document.getElementById("projectRail");
const projectMetaDetails = document.getElementById("projectMetaDetails");
const projectDescription = document.getElementById("projectDescription");

let activeFilter = null;
let currentPool = [...SITE_DATA.mainAssets];
let currentAssetIndex = 0;

function createFallback(label) {
  const fallback = document.createElement("div");
  fallback.className = "visual-placeholder";
  fallback.textContent = label || "Missing asset";
  return fallback;
}

function createProjectFallback(label) {
  const fallback = document.createElement("div");
  fallback.className = "project-asset-placeholder";
  fallback.textContent = label || "Missing project asset";
  return fallback;
}

function createMediaElement(asset, context = "main") {
  let element;

  if (asset.type === "video") {
    element = document.createElement("video");
    element.src = asset.src;
    element.muted = true;
    element.loop = true;
    element.autoplay = true;
    element.playsInline = true;
    element.preload = context === "main" ? "metadata" : "none";

    if (asset.poster) {
      element.poster = asset.poster;
    }
  } else {
    element = document.createElement("img");
    element.src = asset.src;
    element.alt = asset.label || "";
    element.loading = context === "main" ? "eager" : "lazy";
  }

  element.onerror = () => {
    const fallback = context === "main"
      ? createFallback(asset.label)
      : createProjectFallback(asset.label);

    element.replaceWith(fallback);
  };

  return element;
}

function renderMainAsset() {
  visualField.innerHTML = "";

  if (!currentPool.length) {
    visualField.appendChild(createFallback("No asset in this filter"));
    return;
  }

  const asset = currentPool[currentAssetIndex % currentPool.length];
  const media = createMediaElement(asset, "main");
  visualField.appendChild(media);

  if (media.tagName === "VIDEO") {
    media.play().catch(() => {
      /* Muted autoplay is normally allowed, but this prevents console errors. */
    });
  }
}

function goToNextAsset() {
  if (!currentPool.length) return;

  currentAssetIndex = (currentAssetIndex + 1) % currentPool.length;
  renderMainAsset();
}

function normalizeValue(value) {
  return String(value)
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/\//g, "-");
}

function assetMatchesFilter(asset, filter) {
  if (!filter) return true;

  const values = asset[filter.group];

  if (!Array.isArray(values)) return false;

  return values.includes(filter.value);
}

function projectMatchesFilter(projectKey, filter) {
  if (!filter) return false;

  const project = SITE_DATA.projects[projectKey];
  if (!project || !project.filter) return false;

  const values = project.filter[filter.group];

  if (!Array.isArray(values)) return false;

  return values.map(normalizeValue).includes(filter.value);
}

function applyFilter(group, value) {
  const isSameFilter =
    activeFilter &&
    activeFilter.group === group &&
    activeFilter.value === value;

  if (isSameFilter) {
    activeFilter = null;
    currentPool = [...SITE_DATA.mainAssets];
  } else {
    activeFilter = { group, value };
    currentPool = SITE_DATA.mainAssets.filter((asset) =>
      assetMatchesFilter(asset, activeFilter)
    );
  }

  currentAssetIndex = 0;
  updateFilterUI();
  renderMainAsset();
}

function clearFilter() {
  activeFilter = null;
  currentPool = [...SITE_DATA.mainAssets];
  currentAssetIndex = 0;
  updateFilterUI();
  renderMainAsset();
}

function updateFilterUI() {
  filterButtons.forEach((button) => {
    const group = button.dataset.filterGroup;
    const value = button.dataset.filterValue;

    const isActive =
      activeFilter &&
      activeFilter.group === group &&
      activeFilter.value === value;

    button.classList.toggle("is-active", Boolean(isActive));
  });

  projectButtons.forEach((button) => {
    const projectKey = button.dataset.project;
    const isMatching = activeFilter
      ? projectMatchesFilter(projectKey, activeFilter)
      : false;

    button.classList.toggle("is-matching", Boolean(isMatching));
  });
}

function renderProjectMetadata(project) {
  projectMetaDetails.innerHTML = "";

  const metadata = project.metadata || {};

  const lines = [
    `Project: ${metadata.project || project.title || ""}`,
    `Category: ${metadata.category || ""}`,
    `Location: ${metadata.location || ""}`,
    `Year: ${metadata.year || ""}`,
    `Format: ${metadata.format || ""}`,
    `Asset types: ${metadata.assetTypes || ""}`
  ];

  const paragraph = document.createElement("p");

  lines.forEach((line, index) => {
    paragraph.appendChild(document.createTextNode(line));

    if (index < lines.length - 1) {
      paragraph.appendChild(document.createElement("br"));
    }
  });

  projectMetaDetails.appendChild(paragraph);
}

function renderProjectDescription(description) {
  projectDescription.innerHTML = "";

  const paragraphs = String(description || "")
    .trim()
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  paragraphs.forEach((paragraph) => {
    const paragraphElement = document.createElement("p");
    paragraphElement.textContent = paragraph;
    projectDescription.appendChild(paragraphElement);
  });
}

function openProject(projectKey) {
  const project = SITE_DATA.projects[projectKey];

  if (!project) return;

  projectCode.textContent = project.code;

  renderProjectMetadata(project);
  renderProjectDescription(project.description);

  projectRail.innerHTML = "";

  project.media.forEach((asset) => {
    const media = createMediaElement(asset, "project");
    projectRail.appendChild(media);

    if (media.tagName === "VIDEO") {
      media.play().catch(() => {});
    }
  });

  mainStage.classList.add("is-dimmed");
  projectOverlay.classList.add("is-open");
  projectOverlay.setAttribute("aria-hidden", "false");
}

function closeProject() {
  projectOverlay.classList.remove("is-open");
  projectOverlay.setAttribute("aria-hidden", "true");
  mainStage.classList.remove("is-dimmed");

  const videos = projectRail.querySelectorAll("video");
  videos.forEach((video) => video.pause());
}

visualField.addEventListener("click", (event) => {
  event.stopPropagation();
  goToNextAsset();
});

siteHeader.addEventListener("click", (event) => {
  event.stopPropagation();
});

homeReset.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();
  clearFilter();
});

filterButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();

    applyFilter(
      button.dataset.filterGroup,
      button.dataset.filterValue
    );
  });
});

projectButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();

    openProject(button.dataset.project);
  });
});

document.querySelectorAll(".brand-sub-link, .about-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.stopPropagation();
  });
});

projectOverlay.addEventListener("click", closeProject);

projectShell.addEventListener("click", (event) => {
  event.stopPropagation();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeProject();
  }
});

renderMainAsset();
updateFilterUI();