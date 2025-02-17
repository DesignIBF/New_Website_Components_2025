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
    p: "This is sample",
    button: "Click Me",
    a: "This is a button",
    li: "These are list elements",
  };

  const defaultImageSrc = "./assets/images/squares.png"; // Replace with your image URL

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

    // **Only replace images if they have no valid `src` defined**
    document.querySelectorAll("img").forEach((img) => {
      if (
        !img.src ||
        img.src.includes("placeholder") ||
        img.src.trim() === ""
      ) {
        img.src = defaultImageSrc;
        img.alt = "Default Image"; // Optional for accessibility
      }
    });
  }

  // Initial run (for elements already in DOM)
  applyAutoFill();

  // Run auto-fill again when new modules are added
  const observer = new MutationObserver(() => applyAutoFill());
  observer.observe(document.body, { childList: true, subtree: true });

  console.log("✅ Auto-fill applied to dynamically loaded modules!");
});
