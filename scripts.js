// Simple scroll reveal
document.addEventListener("DOMContentLoaded", () => {
  const revealEls = document.querySelectorAll(".reveal-on-scroll");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealEls.forEach((el) => observer.observe(el));
  } else {
    // Fallback: show all
    revealEls.forEach((el) => el.classList.add("reveal-visible"));
  }
});
