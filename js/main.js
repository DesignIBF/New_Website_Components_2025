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

/*****************************************/
// Auto fill all content things
/*****************************************/

document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ Auto-fill script running!");

  // Predefined text for elements
  const autoFillText = {
    h1: "This is an H1",
    h2: "This is an H2",
    h3: "This is an H3",
    h4: "This is an H4",
    p: "This is sample paragraph text",
    button: "Click Me",
    a: "This is a button",
  };

  const defaultImageSrc = "./images/squares.png"; // Replace with your image URL

  // Function to auto-fill empty elements
  function applyAutoFill() {
    Object.keys(autoFillText).forEach((tag) => {
      document.querySelectorAll(tag).forEach((element) => {
        // Only apply text to <a> elements with class "btn"
        if (tag === "a" && !element.classList.contains("btn")) return;

        if (!element.textContent.trim()) {
          element.textContent = autoFillText[tag];
        }
      });
    });

    // **Force replace all images with the default one**
    document.querySelectorAll("img").forEach((img) => {
      img.src = defaultImageSrc;
      img.alt = "Default Image"; // Optional for accessibility
    });
  }

  // Initial run (for elements already in DOM)
  applyAutoFill();

  // Run auto-fill again when new modules are added
  const observer = new MutationObserver(() => applyAutoFill());
  observer.observe(document.body, { childList: true, subtree: true });

  console.log("✅ Auto-fill applied to dynamically loaded modules!");
});

/*****************************************/
// Function to load a module
/*****************************************/

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
  await loadModule("nav"); // New module name
  await loadModule("spotlightBanner"); // New module name
  await loadModule("spotlightBannerWithCards"); // New module name
  await loadModule("spotlightBannerRegularImage"); // New module name
  await loadModule("categoriesHomepage"); // New module name
  await loadModule("categoriesLandingpage"); // New module name
  await loadModule("banners"); // New module name
  await loadModule("contentCards"); // New module name
  await loadModule("productCards"); // New module name
  await loadModule("newModuleTemplate"); // New module name
})();
