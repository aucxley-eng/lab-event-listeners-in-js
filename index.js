// Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  // Generate a random RGB color
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

// Function to reset the background color when the reset button is double-clicked
function resetBackgroundColor() {
  // Clear the background color (empty string, not "white")
  document.body.style.backgroundColor = "";
}

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {
  const keyPressedElement = document.getElementById("keyPressDisplay");
  if (keyPressedElement) {
    // Match exact casing: "Key pressed:"
    keyPressedElement.textContent = `Key pressed: ${event.key}`;
  }
}

// Process Text Input

// Function to display user input in real-time
function displayUserInput() {
  const textInput = document.getElementById("textInput");
  const textInputDisplay = document.getElementById("textInputDisplay");
  if (textInput && textInputDisplay) {
    // Add prefix "You typed:"
    textInputDisplay.textContent = `You typed: ${textInput.value}`;
  }
}

// Attach Event Listeners
function setupEventListeners() {
  const changeColorButton = document.getElementById("changeColorButton");
  const resetColorButton = document.getElementById("resetColorButton");
  const textInput = document.getElementById("textInput");

  if (changeColorButton) {
    changeColorButton.addEventListener("click", changeBackgroundColor);
  }

  if (resetColorButton) {
    // Test expects double-click, not single click
    resetColorButton.addEventListener("dblclick", resetBackgroundColor);
  }

  document.addEventListener("keydown", displayKeyPress);

  if (textInput) {
    textInput.addEventListener("input", displayUserInput);
  }
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", setupEventListeners);
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
};