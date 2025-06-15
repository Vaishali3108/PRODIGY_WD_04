'use strict';

// Toggle sidebar on mobile
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
if (sidebarBtn) {
  sidebarBtn.addEventListener("click", () => elementToggleFunc(sidebar));
}

// Form validation
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");
formInputs.forEach(input => {
  input.addEventListener("input", () => {
    formBtn.disabled = !form.checkValidity();
  });
});

// Page navigation logic
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach(link => {
  link.addEventListener("click", () => {
    const targetPage = link.dataset.target;

    pages.forEach(page => {
      page.classList.toggle("active", page.dataset.page === targetPage);
    });

    navigationLinks.forEach(nav => nav.classList.remove("active"));
    link.classList.add("active");

    window.scrollTo(0, 0);
  });
});
