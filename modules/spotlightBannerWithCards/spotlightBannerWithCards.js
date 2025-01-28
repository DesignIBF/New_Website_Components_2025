async function loadModule(moduleName, containerSelector) {
  try {
    const htmlResponse = await fetch(
      `/modules/components/${moduleName}/${moduleName}.html`
    );
    if (!htmlResponse.ok) throw new Error(`Failed to load ${moduleName}.html`);
    const html = await htmlResponse.text();
    const moduleElement = document.createElement("div");
    moduleElement.innerHTML = html;

    // Load CSS
    const cssLink = document.createElement("link");
    cssLink.rel = "stylesheet";
    cssLink.href = `/modules/components/${moduleName}/${moduleName}.css`;
    document.head.appendChild(cssLink);

    // Append HTML to container
    const container = document.querySelector(containerSelector);
    if (!container) {
      console.error(`Container not found: ${containerSelector}`);
      return;
    }
    container.appendChild(moduleElement);

    // Load JS
    const scriptTag = document.createElement("script");
    scriptTag.src = `/modules/components/${moduleName}/${moduleName}.js`;
    document.body.appendChild(scriptTag);
  } catch (error) {
    console.error(`Error loading module "${moduleName}":`, error);
  }
}
