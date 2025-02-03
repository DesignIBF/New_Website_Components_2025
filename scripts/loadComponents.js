function loadComponent(elementId, filePath) {
  fetch(filePath)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById(elementId).innerHTML = html;
      loadNestedComponents(document.getElementById(elementId)); // Load any nested components inside
    })
    .catch((error) => console.error(`Error loading ${filePath}:`, error));
}

function loadNestedComponents(parentElement) {
  const elements = parentElement.querySelectorAll("[data-component]");
  if (elements.length === 0) return; // No nested components found

  elements.forEach((el) => {
    let file = el.getAttribute("data-component");

    fetch(file)
      .then((response) => response.text())
      .then((html) => {
        el.innerHTML = html;
        loadNestedComponents(el); // Recursively load further nested components
      })
      .catch((error) => console.error(`Error loading ${file}:`, error));
  });
}

///////////////////////////////////////////////
///////////////////////////////////////////////
// Load top-level components down below
///////////////////////////////////////////////

///////////////////////////////////////////////
// Not in use
///////////////////////////////////////////////

// loadComponent("header", "components/header.html");

// loadComponent("nav", "components/nav.html");

// loadComponent("section", "components/section.html");

// loadComponent("footer", "components/footer.html");

///////////////////////////////////////////////

///////////////////////////////////////////////
// In use
///////////////////////////////////////////////

loadComponent("nav", "components/nav.html");

loadComponent("spotlightBanner", "components/spotlightBanner.html");

loadComponent(
  "spotlightBannerWithCards",
  "components/spotlightBannerWithCards.html"
);

loadComponent(
  "spotlightBannerRegularImage",
  "components/spotlightBannerRegularImage.html"
);

loadComponent(
  "spotlightBannerRegularImageWithCards",
  "components/spotlightBannerRegularImageWithCards.html"
);

loadComponent("categoriesHomepage", "components/categoriesHomepage.html");

loadComponent("categoriesLandingpage", "components/categoriesLandingpage.html");

loadComponent("bannersSection", "components/bannersSection.html");

loadComponent("contentCardsSection", "components/contentCardsSection.html");

loadComponent("productCardsSection", "components/productCardsSection.html");

loadComponent("farmBannersSection", "components/farmBannersSection.html");

loadComponent("uspSection", "components/uspSection.html");

///////////////////////////////////////////////
