// Part 2: Functions, scope, parameters, return values

// Function to add animation class
function animateBox(element, className) {
  element.classList.toggle(className);
}

// Function to log and return sum (demonstrates parameters + return values)
function addNumbers(a, b) {
  let result = a + b; // local scope
  console.log(`Sum of ${a} and ${b} is:`, result);
  return result;
}

// Global scope variable
let globalMessage = "I’m accessible anywhere!";

// Using the functions
const box = document.getElementById("box");
document.getElementById("animateBtn").addEventListener("click", () => {
  animateBox(box, "move");
  addNumbers(5, 10); // Example usage
  console.log(globalMessage); // Using global scope
});

// Part 3: Popup modal controlled by JS
const popup = document.getElementById("popup");
const showBtn = document.getElementById("showPopup");
const closeBtn = document.getElementById("closePopup");

function togglePopup(show) {
  if (show) {
    popup.classList.remove("hidden");
    popup.classList.add("show");
  } else {
    popup.classList.remove("show");
    setTimeout(() => popup.classList.add("hidden"), 500); // Wait for animation
  }
}

showBtn.addEventListener("click", () => togglePopup(true));
closeBtn.addEventListener("click", () => togglePopup(false));
