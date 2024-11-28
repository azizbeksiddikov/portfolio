document.addEventListener("DOMContentLoaded", () => {
  // Menu Navigation
  const menuItems = document.querySelectorAll(".menu-item");
  const sections = document.querySelectorAll(".section");

  menuItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const targetSection = item.getAttribute("data-section");

      // Remove active classes
      document.querySelector(".menu-item.active")?.classList.remove("active");
      document.querySelector(".section.active")?.classList.remove("active");

      // Add active classes to selected section
      item.classList.add("active");
      document.getElementById(targetSection).classList.add("active");
    });
  });

  // Home/button => Contacts
  const contactBtn = document.querySelector(".contact-btn");
  contactBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const targetSection = "contacts";

    // Remove active classes
    document.querySelector(".menu-item.active")?.classList.remove("active");
    document.querySelector(".section.active")?.classList.remove("active");

    // Add active class to the "contacts" section
    document
      .querySelector('.menu-item[data-section="contacts"]')
      .classList.add("active");
    document.getElementById(targetSection).classList.add("active");
  });

  // Slider Initialization
  const sliderContainer = document.querySelector(".slider");
  projects.forEach((project, index) => {
    const projectElement = document.createElement("li");
    projectElement.classList.add("slider--item");

    // Add specific classes to the first three items
    if (index === 0) {
      projectElement.classList.add("slider--item-left");
    } else if (index === 1) {
      projectElement.classList.add("slider--item-center");
    } else if (index === 2) {
      projectElement.classList.add("slider--item-right");
    }

    projectElement.innerHTML = `
      <a href="${project.link}" target="_blank">
        <div class="slider--item-image">
          <img src="${project.image}" alt="${project.title}">
        </div>
        <p class="slider--item-title">${project.title}</p>
        <p class="slider--item-description">
          ${project.description}
        </p>
      </a>
    `;

    sliderContainer.appendChild(projectElement);
  });

  // Slider Navigation
  const slider = document.querySelector(".slider");
  const sliderChildren = Array.from(slider.children);
  const totalItems = sliderChildren.length;
  const prevNextButtons = document.querySelectorAll(
    ".slider--prev, .slider--next"
  );

  prevNextButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const leftItem = slider.querySelector(".slider--item-left");
      const centerItem = slider.querySelector(".slider--item-center");
      const rightItem = slider.querySelector(".slider--item-right");

      const leftIndex = sliderChildren.indexOf(leftItem);
      const centerIndex = sliderChildren.indexOf(centerItem);
      const rightIndex = sliderChildren.indexOf(rightItem);

      // Fade out
      slider.classList.add("fade-out");

      setTimeout(() => {
        let newLeftIndex, newCenterIndex, newRightIndex;

        if (this.classList.contains("slider--next")) {
          // Next button clicked
          newLeftIndex = (leftIndex + 1) % totalItems;
          newCenterIndex = (centerIndex + 1) % totalItems;
          newRightIndex = (rightIndex + 1) % totalItems;
        } else {
          // Prev button clicked
          newLeftIndex = (leftIndex - 1 + totalItems) % totalItems;
          newCenterIndex = (centerIndex - 1 + totalItems) % totalItems;
          newRightIndex = (rightIndex - 1 + totalItems) % totalItems;
        }

        // Remove old classes
        leftItem.classList.remove("slider--item-left");
        centerItem.classList.remove("slider--item-center");
        rightItem.classList.remove("slider--item-right");

        // Add new classes
        sliderChildren[newLeftIndex].classList.add("slider--item-left");
        sliderChildren[newCenterIndex].classList.add("slider--item-center");
        sliderChildren[newRightIndex].classList.add("slider--item-right");

        // Fade in
        slider.classList.remove("fade-out");
      }, 400);
    });
  });

  // Contact Form Submission
  const contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    // Collect form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());

    // Send the form data to the server as JSON
    try {
      const response = await fetch("/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("Server response:", result);

      if (result.status === "success") {
        alert("Your message has been sent successfully!");
        contactForm.reset();
      } else {
        alert("There was an error sending your message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("There was an error sending your message.");
    }
  });
});
