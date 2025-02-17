window.onload = function () {
  console.log("✅ Page fully loaded. Script initialized.");

  function setupEvent() {
    var more = document.getElementById("more");
    var hiddenLi = document.querySelector(".hidden-li");
    var svgIcon = document.querySelector("#more svg"); // Select the SVG inside #more

    if (more && hiddenLi) {
      more.addEventListener("click", function () {
        toggleLi(hiddenLi, more, svgIcon);
      });
      console.log("✅ Event listener added!");
    } else {
      console.warn("⚠️ Elements not found. Retrying...");
      setTimeout(setupEvent, 500); // Retry after a short delay
    }
  }

  function toggleLi(hiddenLi, moreButton, svgIcon) {
    hiddenLi.classList.toggle("open");

    // Get the <li> inside #more and only change its text, keeping the SVG
    let textNode = moreButton.querySelector("li");
    if (textNode) {
      // Find the actual text node and update it
      let textElement = textNode.childNodes[0]; // First node (text before the SVG)
      if (textElement.nodeType === 3) {
        // Ensure it's a text node
        textElement.nodeValue =
          textElement.nodeValue.trim() === "More" ? "Less " : "More ";
      }
    }

    // Rotate SVG if it exists
    if (svgIcon) {
      svgIcon.style.transition = "transform 0.3s ease";
      svgIcon.classList.toggle("rotated");
    }

    console.log("✅ Toggled .hidden-li elements and rotated SVG!");
  }

  setupEvent();
  console.log("More button script loaded.");
};
