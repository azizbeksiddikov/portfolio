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

  // Projects Carousel
  const projectCards = document.querySelectorAll(".project-card");
  const navLeft = document.querySelector(".nav-left");
  const navRight = document.querySelector(".nav-right");
  let currentIndex = 1; // Starting with center project

  function rotateProjects(direction) {
    currentIndex += direction;

    // Ensure circular rotation
    if (currentIndex >= projectCards.length) {
      currentIndex = 0;
    } else if (currentIndex < 0) {
      currentIndex = projectCards.length - 1;
    }

    // Reset project card classes and details
    projectCards.forEach((card, index) => {
      card.classList.remove("center", "left", "right");
      const details = card.querySelector(".project-details");
      if (details) {
        details.innerHTML = `<h3>${card.querySelector("img").alt}</h3>`;
      }
    });

    // Set new positions
    const centerCard = projectCards[currentIndex];
    const leftIndex =
      currentIndex > 0 ? currentIndex - 1 : projectCards.length - 1;
    const rightIndex =
      currentIndex < projectCards.length - 1 ? currentIndex + 1 : 0;

    projectCards[leftIndex].classList.add("left");
    centerCard.classList.add("center");
    projectCards[rightIndex].classList.add("right");

    // Add full details to center card
    const centerDetails = centerCard.querySelector(".project-details");
    centerDetails.innerHTML = `
            <h3>${centerCard.querySelector("img").alt}</h3>
            <p>${centerCard.getAttribute("data-description")}</p>
            <a href="#" class="project-link">More Details</a>
        `;
  }

  navLeft.addEventListener("click", () => rotateProjects(-1));
  navRight.addEventListener("click", () => rotateProjects(1));

  // Contact Form Submission
  const contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch("/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        contactForm.reset();
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  });
});
