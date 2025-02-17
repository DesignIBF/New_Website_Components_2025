document.addEventListener("DOMContentLoaded", function () {
  console.log("✅ Optimized text truncation initialized.");

  function truncateAllH2s() {
    const h2Elements = document.querySelectorAll("#bannersSection h2");

    h2Elements.forEach((h2Element) => {
      const words = h2Element.textContent.trim().split(/\s+/);
      if (words.length > 10) {
        const fullText = h2Element.textContent;
        h2Element.textContent = words.slice(0, 10).join(" ") + "...";
        h2Element.setAttribute("title", fullText);
      }
    });
  }

  // Run truncation once after DOMContentLoaded
  setTimeout(truncateAllH2s, 500);

  // Prevent excessive calls using requestAnimationFrame
  let isScheduled = false;

  const observer = new MutationObserver(() => {
    if (!isScheduled) {
      isScheduled = true;
      requestAnimationFrame(() => {
        truncateAllH2s();
        isScheduled = false;
      });
    }
  });

  const bannersSection = document.querySelector("#bannersSection");
  if (bannersSection) {
    observer.observe(bannersSection, { childList: true, subtree: true });
    console.log("👀 Optimized MutationObserver now watching for H2 updates...");
  } else {
    console.warn("⚠️ #bannersSection not found. Skipping MutationObserver.");
  }
});

// document.addEventListener("DOMContentLoaded", function () {
//   console.log("✅ Optimized text truncation (by lines) initialized.");

//   function truncateH2ByLines() {
//     const h2Elements = document.querySelectorAll("#bannersSection h2");

//     h2Elements.forEach((h2Element) => {
//       const maxLines = 2; // Set the maximum number of lines
//       const lineHeight = parseFloat(
//         window.getComputedStyle(h2Element).lineHeight
//       );
//       const maxHeight = maxLines * lineHeight;

//       h2Element.style.overflow = "hidden"; // Prevent content from breaking layout
//       h2Element.style.display = "-webkit-box";
//       h2Element.style.webkitLineClamp = maxLines; // Enable multi-line truncation (for WebKit browsers)
//       h2Element.style.webkitBoxOrient = "vertical";

//       if (h2Element.scrollHeight > maxHeight) {
//         let text = h2Element.textContent.trim();
//         while (h2Element.scrollHeight > maxHeight && text.length > 0) {
//           text = text.slice(0, -1); // Remove one character at a time
//           h2Element.textContent = text + "...";
//         }
//         h2Element.setAttribute("title", text + "...");
//       }
//     });
//   }

//   // Run truncation once after DOMContentLoaded
//   setTimeout(truncateH2ByLines, 500);

//   // Prevent excessive calls using requestAnimationFrame
//   let isScheduled = false;

//   const observer = new MutationObserver(() => {
//     if (!isScheduled) {
//       isScheduled = true;
//       requestAnimationFrame(() => {
//         truncateH2ByLines();
//         isScheduled = false;
//       });
//     }
//   });

//   const bannersSection = document.querySelector("#bannersSection");
//   if (bannersSection) {
//     observer.observe(bannersSection, { childList: true, subtree: true });
//     console.log("👀 Now watching for H2 text changes...");
//   } else {
//     console.warn("⚠️ #bannersSection not found. Skipping MutationObserver.");
//   }
// });
