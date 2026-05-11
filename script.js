const button = document.getElementById("btn");
const text = document.getElementById("text");

// Load saved value when page opens
const savedText = localStorage.getItem("message");

if (savedText) {
  text.textContent = savedText;
}

// When button is clicked
button.addEventListener("click", function () {
  const newMessage = "You clicked the button 🎉";

  text.textContent = newMessage;

  // Save to localStorage
  localStorage.setItem("message", newMessage);
});