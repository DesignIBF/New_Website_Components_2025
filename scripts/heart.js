console.log("❤️ Heart Script Loaded");

function initializeHeartFeature() {
  var heartBtns = document.querySelectorAll(".heart"); // Select all heart buttons
  var changeHearts = document.querySelectorAll(".heart-icon path"); // Select all heart paths

  if (heartBtns.length === 0 || changeHearts.length === 0) {
    console.warn("❌ No heart buttons found, retrying...");
    setTimeout(initializeHeartFeature, 200); // Retry after 200ms
    return;
  }

  console.log(`✅ Found ${heartBtns.length} heart buttons`);

  // Loop through each heart button and add an event listener
  heartBtns.forEach((heartBtn, index) => {
    heartBtn.addEventListener("click", function () {
      console.log(`❤️ Heart icon clicked on card ${index + 1}`);

      var heartPath = heartBtn.querySelector("path"); // Find the path inside the clicked button
      if (heartPath) {
        heartPath.classList.toggle("hearted"); // Toggle class on this specific heart
      }
    });
  });
}

// Wait for DOM to load and initialize the heart feature
document.addEventListener("DOMContentLoaded", initializeHeartFeature);
