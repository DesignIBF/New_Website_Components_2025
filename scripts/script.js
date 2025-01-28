console.log("ik ben gelinkt");

function loadComponent(placeholderId, filePath) {
  return fetch(filePath)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to fetch ${filePath}: ${response.statusText}`);
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById(placeholderId).innerHTML = data;
    })
    .catch((error) => console.error(error));
}

// Load Navbar and its styles
loadComponent("navbar-placeholder", "components/navbar.html").then(() => {
  // Dynamically load navbar.css
  const navbarStyles = document.createElement("link");
  navbarStyles.rel = "stylesheet";
  navbarStyles.href = "styles/navbar.css";
  document.head.appendChild(navbarStyles);

  // Optionally load navbar.js
  loadScript("scripts/navbar.js");
});

// Load Spotlight Banner
loadComponent(
  "spotlight-banner-placeholder",
  "components/spotlight-banner.html"
);

// Load Sspotlight-banner-product-cards
loadComponent(
  "spotlight-banner-product-cards-placeholder",
  "components/spotlight-banner-product-cards.html"
);

// Load Categories
loadComponent("categories-placeholder", "components/categories.html");

// Load Content cards
loadComponent("content-cards-placeholder", "components/content-cards.html");

console.log("Loading product-cards.html...");
loadComponent(
  "product-cards-placeholder",
  "components/product-cards.html"
).then(() => {
  console.log("product-cards.html loaded.");
  loadScript("scripts/product-cards.js");
});

// Load Footer
loadComponent("footer-placeholder", "components/footer.html");

function loadScript(filePath) {
  const script = document.createElement("script");
  script.src = filePath;
  document.body.appendChild(script);
}
