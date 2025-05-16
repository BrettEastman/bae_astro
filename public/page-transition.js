// Fade out on link click, fade in on load
// Duration should match the CSS transition (400ms)
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  body.classList.add("fade-visible");

  document.querySelectorAll('a[href]').forEach(link => {
    link.addEventListener('click', function(e) {
      // Only fade out for internal links
      if (
        link.hostname === window.location.hostname &&
        !link.hasAttribute('target') &&
        !link.href.startsWith('mailto:') &&
        !link.href.startsWith('tel:')
      ) {
        e.preventDefault();
        body.classList.remove("fade-visible");
        setTimeout(() => {
          window.location = link.href;
        }, 400); // match CSS transition duration
      }
    });
  });
});
