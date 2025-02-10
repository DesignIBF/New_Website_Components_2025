// console.log("✅ Form Confirmation Script Loaded");

// function initializeFormConfirmation() {
//   var form = document.getElementById("myForm");
//   var submitBtn = document.getElementById("submitBtn");

//   if (!form || !submitBtn) {
//     console.warn("❌ Form or submit button not found, retrying...");
//     setTimeout(initializeFormConfirmation, 200); // Retry every 200ms
//     return;
//   }

//   console.log("✅ Form and Submit Button Found!");

//   form.addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent the default form submission

//     // Simulate a short delay (e.g., API request)
//     submitBtn.textContent = "Submitting...";
//     submitBtn.disabled = true;

//     setTimeout(() => {
//       submitBtn.textContent = "✔ Confirmed"; // Change button text
//       submitBtn.classList.add("confirmed"); // Add a visual class
//     }, 1000); // Simulated processing delay
//   });
// }

// // Run function after DOM is loaded
// document.addEventListener("DOMContentLoaded", initializeFormConfirmation);

console.log("✅ Form Confirmation Script Loaded");

function initializeFormConfirmation() {
  var form = document.getElementById("myForm");
  var submitBtn = document.getElementById("submitBtn");

  if (!form || !submitBtn) {
    console.warn("❌ Form or submit button not found, retrying...");
    setTimeout(initializeFormConfirmation, 200); // Retry every 200ms
    return;
  }

  console.log("✅ Form and Submit Button Found!");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    var formData = new FormData(form);
    var formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    console.log("📝 Form Data Submitted:", formObject); // Log to console

    submitBtn.textContent = "Submitting...";
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.textContent = "✅ Confirmed"; // Change button text
      submitBtn.classList.add("confirmed"); // Add a visual class
    }, 1000);
  });
}

// Run function after DOM is loaded
document.addEventListener("DOMContentLoaded", initializeFormConfirmation);
