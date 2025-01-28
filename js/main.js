const moduleContainer = document.getElementById("module-container");

// Create and append the grid overlay to the body
const gridOverlay = document.createElement("div");
gridOverlay.className = "grid-overlay";

// Create the grid columns dynamically
const columns = 12; // Adjust the number of columns here
for (let i = 0; i < columns; i++) {
  const column = document.createElement("div");
  column.className = "grid-column";
  gridOverlay.appendChild(column);
}

// Append the overlay to the body
document.body.appendChild(gridOverlay);

// Toggle the grid overlay on and off
function toggleGridOverlay() {
  gridOverlay.classList.toggle("active");
}

// Listen for a keypress to toggle the overlay (e.g., 'G' key)
document.addEventListener("keydown", (event) => {
  if (event.key.toLowerCase() === "g") {
    toggleGridOverlay();
  }
});

// Function to load a module
async function loadModule(moduleName, container = moduleContainer) {
  try {
    // Fetch and inject the HTML
    const htmlResponse = await fetch(
      `modules/${moduleName}/${moduleName}.html`
    );
    if (!htmlResponse.ok) throw new Error(`Failed to load ${moduleName}.html`);
    const html = await htmlResponse.text();
    const moduleElement = document.createElement("div");
    moduleElement.innerHTML = html;

    // Load the CSS
    const cssLink = document.createElement("link");
    cssLink.rel = "stylesheet";
    cssLink.href = `modules/${moduleName}/${moduleName}.css`;
    document.head.appendChild(cssLink);

    // Append HTML to container
    container.appendChild(moduleElement);

    // Load the JavaScript
    const scriptTag = document.createElement("script");
    scriptTag.src = `modules/${moduleName}/${moduleName}.js`;
    document.body.appendChild(scriptTag);
  } catch (error) {
    console.error(`Error loading module "${moduleName}":`, error);
  }
}

// Example usage: Load modules here
(async function initModules() {
  await loadModule("newModuleTemplate"); // New module name
  await loadModule("spotlightBanner"); // New module name
  await loadModule("spotlightBannerWithCards"); // New module name
})();
