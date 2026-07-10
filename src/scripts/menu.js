document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelectorAll(".nav-links").forEach((nav) => {
    nav.classList.toggle("expanded");
  });
  const hamburger = document.querySelector(".hamburger");
  const isExpanded = hamburger.classList.toggle("active");
  hamburger.setAttribute("aria-expanded", String(isExpanded));
});
