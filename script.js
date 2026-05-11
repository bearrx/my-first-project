const button = document.getElementById("btn");
const text = document.getElementById("text");

button.addEventListener("click", function () {
  text.textContent = "You clicked the button 🎉";
});