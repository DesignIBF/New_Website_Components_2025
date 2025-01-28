// Fake data for search results
const fakeResults = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Elderberry",
  "Fig",
  "Grape",
  "Honeydew",
];

// Select elements
const searchBar = document.getElementById("search-bar");
const searchResults = document.getElementById("search-results");

// Listen for input events on the search bar
searchBar.addEventListener("input", () => {
  const query = searchBar.value.toLowerCase();

  // Filter fake results based on input
  const matches = fakeResults.filter((item) =>
    item.toLowerCase().includes(query)
  );

  // Display matches in the dropdown
  if (matches.length > 0 && query !== "") {
    searchResults.innerHTML = matches
      .map((item) => `<div>${item}</div>`)
      .join("");
    searchResults.style.display = "block";
  } else {
    searchResults.style.display = "none";
  }
});

// Hide results when clicking outside
document.addEventListener("click", (event) => {
  if (
    !searchBar.contains(event.target) &&
    !searchResults.contains(event.target)
  ) {
    searchResults.style.display = "none";
  }
});

// Handle click on a result
searchResults.addEventListener("click", (event) => {
  if (event.target.tagName === "DIV") {
    searchBar.value = event.target.textContent; // Set the clicked result in the input
    searchResults.style.display = "none"; // Hide the dropdown
  }
});
