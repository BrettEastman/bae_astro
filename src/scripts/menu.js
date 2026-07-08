document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelectorAll(".nav-links").forEach((nav) => {
    nav.classList.toggle("expanded");
  });
  document.querySelector(".hamburger").classList.toggle("active");
});
