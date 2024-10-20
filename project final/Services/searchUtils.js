$(document).ready(async function () {
  // Get the input field
  var input = document.getElementById("header-input-search-field");

  // Execute a function when the user presses a key on the keyboard
  input.addEventListener("keypress", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      //   document.getElementById("myBtn").click();
      if (input.value) {
        // Simulate a mouse click:
        window.location.href = `./search.html?searchQuery=${input.value}`;
      }
      console.log("Enter btn has been pressed", input.value);
    }
  });
});
