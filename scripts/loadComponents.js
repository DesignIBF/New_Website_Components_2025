function loadComponent(elementId, filePath) {
  return fetch(filePath)
    .then((response) => {
      if (!response.ok) throw new Error(`Failed to load ${filePath}`);
      return response.text();
    })
    .then((html) => {
      const container = document.getElementById(elementId);
      container.innerHTML = html;
      loadNestedComponents(container); // Load nested components
      console.log(`Loaded component: ${elementId}`);
    })
    .catch((error) => console.error(`Error loading ${filePath}:`, error));
}

function loadNestedComponents(parentElement) {
  const elements = parentElement.querySelectorAll("[data-component]");
  if (elements.length === 0) return;

  elements.forEach((el) => {
    const file = el.getAttribute("data-component");

    fetch(file)
      .then((response) => {
        if (!response.ok) throw new Error(`Failed to load ${file}`);
        return response.text();
      })
      .then((html) => {
        el.innerHTML = html;
        loadNestedComponents(el); // Recursively load nested components
      })
      .catch((error) =>
        console.error(`Error loading nested component: ${file}`, error)
      );
  });
}

// Array of components and their corresponding JS files
const components = [
  { id: "nav", filePath: "components/nav.html", jsFile: "scripts/nav.js" },
  { id: "footer", filePath: "components/footer.html", jsFile: null },

  /* Spotlight Banner sections */
  {
    id: "spotlightBanner",
    filePath: "components/spotlightBanner.html",
    jsFile: null,
  },
  {
    id: "spotlightBannerWithCards",
    filePath: "components/spotlightBannerWithCards.html",
    jsFile: null,
  },
  {
    id: "spotlightBannerRegularImage",
    filePath: "components/spotlightBannerRegularImage.html",
    jsFile: null,
  },
  {
    id: "spotlightBannerRegularImageWithCards",
    filePath: "components/spotlightBannerRegularImageWithCards.html",
    jsFile: null,
  },

  /* Categories sections */
  {
    id: "categoriesHomepage",
    filePath: "components/categoriesHomepage.html",
    jsFile: null,
  },
  {
    id: "categoriesLandingpage",
    filePath: "components/categoriesLandingpage.html",
    jsFile: null,
  },

  /* Banners sections */
  {
    id: "bannersSection",
    filePath: "components/bannersSection.html",
    jsFile: "scripts/banner.js",
  },
  {
    id: "bannersSection2",
    filePath: "components/bannersSection2.html",
    jsFile: null,
  },
  {
    id: "bannersSection3",
    filePath: "components/bannersSection3.html",
    jsFile: null,
  },

  /* Cards sections */
  {
    id: "contentCardsSection",
    filePath: "components/contentCardsSection.html",
    jsFile: null,
  },
  {
    id: "productCardsSection",
    filePath: "components/productCardsSection.html",
    jsFile: null,
  },
  {
    id: "moodboardCardsSection",
    filePath: "components/moodboardCardsSection.html",
    jsFile: null,
  },

  /* Farm banners sections */
  {
    id: "farmBannersSection",
    filePath: "components/farmBannersSection.html",
    jsFile: null,
  },

  /* Usps sections */
  { id: "uspSection", filePath: "components/uspSection.html", jsFile: null },

  /* Lists sections */
  {
    id: "listsSection",
    filePath: "components/listsSection.html",
    jsFile: null,
  },

  /* Logos sections */
  {
    id: "logosSection",
    filePath: "components/logosSection.html",
    jsFile: null,
  },

  /* Article sections */
  {
    id: "articleSection",
    filePath: "components/articleSection.html",
    jsFile: null,
  },
  // {
  //   id: "newsletterSection",
  //   filePath: "components/newsletterSection.html",
  //   jsFile: null,
  // },
  {
    id: "gridSection",
    filePath: "components/gridSection.html",
    jsFile: null,
  },
  {
    id: "faqSection",
    filePath: "components/faqSection.html",
    jsFile: "scripts/faqSection.js",
  },
];

// Function to load all components
function loadAllComponents() {
  const promises = components.map((component) =>
    loadComponent(component.id, component.filePath)
  );

  // Wait for all components to load
  Promise.all(promises)
    .then(() => {
      console.log("All components loaded!");

      // Load JavaScript files for components
      components.forEach((component) => {
        if (component.jsFile) {
          const scriptTag = document.createElement("script");
          scriptTag.src = component.jsFile;
          document.body.appendChild(scriptTag);
          console.log(`Loaded script: ${component.jsFile}`);
        }
      });
    })
    .catch((error) => console.error("Error loading components:", error));
}

// Start loading components on DOMContentLoaded
document.addEventListener("DOMContentLoaded", loadAllComponents);
