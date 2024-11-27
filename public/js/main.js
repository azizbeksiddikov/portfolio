document.addEventListener("DOMContentLoaded", () => {
  // Menu Navigation
  const menuItems = document.querySelectorAll(".menu-item");
  const sections = document.querySelectorAll(".section");

  menuItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const targetSection = e.target.getAttribute("data-section");

      // Remove active classes
      menuItems.forEach((mi) => mi.classList.remove("active"));
      sections.forEach((section) => section.classList.remove("active"));

      // Add active classes to selected section
      e.target.classList.add("active");
      document.getElementById(targetSection).classList.add("active");
    });
  });

  // Home/button => Contacts
  https: document
    .querySelector(".contact-btn")
    .addEventListener("click", (e) => {
      e.preventDefault(); // Prevents the default action of navigating to the "contacts" section

      const targetSection = "contacts"; // The target section is hardcoded to "contacts" based on the href

      // Remove active classes
      menuItems.forEach((mi) => mi.classList.remove("active"));
      sections.forEach((section) => section.classList.remove("active"));

      // Add active class to the "contacts" section
      e.target.classList.add("active");
      document.getElementById(targetSection).classList.add("active");
    });
});
