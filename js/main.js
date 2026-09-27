// Ochre Coffee Roasters — small bits of interactivity.
// Vanilla JS, no dependencies, so every line is easy to follow and explain.

(function () {
  "use strict";

  const root = document.documentElement;

  // --- Dark / light theme toggle ----------------------------------
  // The initial theme is set by the inline script in <head> (before
  // paint). Here we just handle clicks and keep the button label honest.
  const themeToggle = document.getElementById("theme-toggle");

  function updateThemeLabel() {
    if (!themeToggle) return;
    const isDark = root.classList.contains("dark");
    themeToggle.setAttribute(
      "aria-label",
      isDark ? "Switch to light theme" : "Switch to dark theme"
    );
  }
  updateThemeLabel();

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      root.classList.toggle("dark");
      localStorage.setItem(
        "theme",
        root.classList.contains("dark") ? "dark" : "light"
      );
      updateThemeLabel();
    });
  }

  // --- Mobile navigation menu -------------------------------------
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", function () {
      // toggle() returns true when "hidden" was just added (menu closed).
      const isOpen = mobileMenu.classList.toggle("hidden") === false;
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    });
  }

  // --- Current year in the footer ---------------------------------
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // --- Contact form ------------------------------------------------
  // There's no backend for this project, so we confirm on the page
  // once the browser's built-in validation passes.
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  if (form && status) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const data = new FormData(form);
      const firstName = (data.get("name") || "there").toString().trim().split(" ")[0];

      status.textContent =
        "Thanks, " + firstName + "! We've got your message and will reply within a day.";
      status.classList.remove("hidden");
      form.reset();
      status.focus();
    });
  }
})();
