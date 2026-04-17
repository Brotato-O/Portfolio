const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const links = navLinks.querySelectorAll("a");
const form = document.querySelector(".contact-form");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = form.elements.name.value.trim();

  alert(`Cảm ơn ${name || "bạn"} đã liên hệ! Mình sẽ phản hồi sớm nhất.`);
  form.reset();
});
