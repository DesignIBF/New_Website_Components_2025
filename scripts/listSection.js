// window.onload = function () {
//   console.log("✅ Page fully loaded. Script initialized.");

//   function setupEvent() {
//     var more = document.getElementById("more");
//     var hiddenLi = document.querySelector(".hidden-li");
//     var svgIcon = document.querySelector("#more svg"); // Select the SVG inside #more

//     if (more && hiddenLi) {
//       more.addEventListener("click", function () {
//         toggleLi(hiddenLi, more, svgIcon);
//       });
//       console.log("✅ Event listener added!");
//     } else {
//       console.warn("⚠️ Elements not found. Retrying...");
//       setTimeout(setupEvent, 500); // Retry after a short delay
//     }
//   }

//   function toggleLi(hiddenLi, moreButton, svgIcon) {
//     hiddenLi.classList.toggle("open");

//     // Get the <li> inside #more and only change its text, keeping the SVG
//     let textNode = moreButton.querySelector("li");
//     if (textNode) {
//       // Find the actual text node and update it
//       let textElement = textNode.childNodes[0]; // First node (text before the SVG)
//       if (textElement.nodeType === 3) {
//         // Ensure it's a text node
//         textElement.nodeValue =
//           textElement.nodeValue.trim() === "More" ? "Less " : "More ";
//       }
//     }

//     // Rotate SVG if it exists
//     if (svgIcon) {
//       svgIcon.style.transition = "transform 0.3s ease";
//       svgIcon.classList.toggle("rotated");
//     }

//     console.log("✅ Toggled .hidden-li elements and rotated SVG!");
//   }

//   setupEvent();
//   console.log("More button script loaded.");
// };

window.onload = function () {
  console.log("✅ Page fully loaded. Script initialized.");

  function setupEvents() {
    var moreButtons = document.querySelectorAll("#more");
    var hiddenLists = document.querySelectorAll(".hidden-li");

    if (moreButtons.length === 0 || hiddenLists.length === 0) {
      console.warn("⚠️ No matching elements found. Retrying...");
      setTimeout(setupEvents, 500); // Retry after a short delay
      return;
    }

    console.log(
      `✅ Found ${moreButtons.length} "More" buttons and ${hiddenLists.length} hidden lists`
    );

    moreButtons.forEach((moreButton, index) => {
      var hiddenLi = hiddenLists[index]; // Match each button with its corresponding list
      var svgIcon = moreButton.querySelector("svg");

      if (hiddenLi) {
        moreButton.addEventListener("click", function () {
          toggleLi(hiddenLi, moreButton, svgIcon);
        });
        console.log(`✅ Event listener added for "More" button ${index + 1}`);
      }
    });
  }

  function toggleLi(hiddenLi, moreButton, svgIcon) {
    hiddenLi.classList.toggle("open");

    // Get the <li> inside #more and only change its text, keeping the SVG
    let textNode = moreButton.querySelector("li");
    if (textNode) {
      let textElement = textNode.childNodes[0]; // First node (text before the SVG)
      if (textElement.nodeType === 3) {
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

  setupEvents();
  console.log("More button script loaded.");
};
