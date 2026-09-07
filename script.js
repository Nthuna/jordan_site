// Simple greeting button
document.addEventListener("DOMContentLoaded", () => {
  const greetBtn = document.getElementById("greetBtn");
  if (greetBtn) {
    greetBtn.addEventListener("click", () => {
      alert("Welcome to my website! Have a great day 😄");
    });
  }

  // Handle contact form submission
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      alert(`Thanks, ${name}! Your message has been sent.`);
      form.reset();
    });
  }
});
