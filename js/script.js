const root = document.documentElement;
const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-toggle");
const navContent = document.querySelector(".nav-content");
const themeButton = document.querySelector(".theme-toggle");
const themeLabel = document.querySelector(".theme-label");
const toast = document.querySelector(".toast");

function setTheme(theme) {
  root.dataset.theme = theme;
  localStorage.setItem("portfolio-theme", theme);
  themeLabel.textContent = theme === "dark" ? "Light" : "Dark";
  themeButton.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} theme`);
}

const savedTheme = localStorage.getItem("portfolio-theme");
const preferredTheme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
setTheme(savedTheme || preferredTheme);

themeButton.addEventListener("click", () => {
  setTheme(root.dataset.theme === "dark" ? "light" : "dark");
});

function closeMenu() {
  navContent.classList.remove("is-open");
  menuButton.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation");
}

menuButton.addEventListener("click", () => {
  const isOpen = navContent.classList.toggle("is-open");
  menuButton.classList.toggle("is-open", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

document.querySelectorAll('.nav-content a[href^="#"]').forEach((link) => {
  link.addEventListener("click", closeMenu);
});

window.addEventListener("scroll", () => {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
}, { passive: true });

const observedSections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll('.nav-links a[href^="#"]')];
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
    });
  });
}, { rootMargin: "-35% 0px -58%", threshold: 0 });

observedSections.forEach((section) => sectionObserver.observe(section));

function showToast(message, type = "success") {
  toast.textContent = message;
  toast.className = `toast show ${type}`;
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.className = "toast";
  }, 3800);
}

document.querySelector("#contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const requiredFields = [...form.querySelectorAll("[required]")];

  requiredFields.forEach((field) => field.removeAttribute("aria-invalid"));
  const invalidField = requiredFields.find((field) => !field.value.trim() || !field.checkValidity());
  if (invalidField) {
    invalidField.setAttribute("aria-invalid", "true");
    invalidField.focus();
    showToast("Please complete the highlighted field.", "error");
    return;
  }

  const subject = encodeURIComponent(data.get("subject"));
  const body = encodeURIComponent(
    `${data.get("message")}\n\n— ${data.get("name")}\n${data.get("email")}`
  );
  window.location.href = `mailto:ashwanix2749@gmail.com?subject=${subject}&body=${body}`;
  showToast("Your email app is opening with the message ready.");
});

document.querySelector("#current-year").textContent = new Date().getFullYear();

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});
