console.log("Test");

document.addEventListener("mouseover", function (event) {
  const allFlowers = document.getElementById("allFlowers");
  const dropdown = document.getElementById("dropdownContainerFlowers");

  if (!allFlowers || !dropdown) return; // Prevent errors if elements are not found

  // Show dropdown when hovering over #allFlowers
  if (event.target.id === "allFlowers") {
    dropdown.classList.add("hover-active");
  }

  // Hide dropdown when moving mouse away
  dropdown.addEventListener("mouseleave", function () {
    dropdown.classList.remove("hover-active");
  });
});

document.addEventListener("mouseover", function (event) {
  const colors = document.getElementById("colors");
  const dropdown = document.getElementById("dropdownContainerColors");

  if (!colors || !dropdown) return; // Prevent errors if elements are not found

  // Show dropdown when hovering over #colors
  if (event.target.id === "colors") {
    dropdown.classList.add("hover-active");
  }

  // Hide dropdown when moving mouse away
  dropdown.addEventListener("mouseleave", function () {
    dropdown.classList.remove("hover-active");
  });
});
