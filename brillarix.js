const startButton = document.getElementById("startButton");
const heroText = document.getElementById("heroText");

startButton.addEventListener("click", function () {
  heroText.textContent = "Your idea can become a real project."
});
const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const messageInput = document.getElementById("messageInput");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {
  event.preventDefault();

  if (nameInput.value === "" || emailInput.value === "" || messageInput.value === "" ) {
    formMessage.textContent = "Please fill all the fields.";
  } else {
    formMessage.textContent = "Thank you! We will contact you soon."
  }
});