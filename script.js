import "./components.js";

/* ── Sidebar toggle ── */
const toggle = document.getElementById("socialToggle");
const sidebar = document.getElementById("socialSidebar");
const backdrop = document.getElementById("sidebarBackdrop");

function openSidebar() {
  sidebar.classList.add("header__sidebar--open");
  sidebar.setAttribute("aria-hidden", "false");
  toggle.setAttribute("aria-expanded", "true");
  toggle.setAttribute("aria-label", "Close social links");
  document.body.style.overflow = "hidden"; // prevent background scroll
}

function closeSidebar() {
  sidebar.classList.remove("header__sidebar--open");
  sidebar.setAttribute("aria-hidden", "true");
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-label", "Open social links");
  document.body.style.overflow = "";
}

toggle.addEventListener("click", () => {
  sidebar.classList.contains("header__sidebar--open")
    ? closeSidebar()
    : openSidebar();
});

// Close on backdrop click
backdrop.addEventListener("click", closeSidebar);

// Close on Escape key
document.addEventListener("keydown", (e) => {
  if (
    e.key === "Escape" &&
    sidebar.classList.contains("header__sidebar--open")
  ) {
    closeSidebar();
    toggle.focus(); // return focus for accessibility
  }
});

const revealEls = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const siblings = [...entry.target.parentElement.children];
        const index = siblings.indexOf(entry.target);
        entry.target.style.transitionDelay = `${index * 0.07}s`;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

revealEls.forEach((el) => observer.observe(el));

const year = new Date().getFullYear();
const footerYear = document.querySelector("span.footer-year");

footerYear.textContent = year;

history.scrollRestoration = "manual";
