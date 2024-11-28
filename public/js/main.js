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
  document.querySelector(".contact-btn").addEventListener("click", (e) => {
    e.preventDefault(); // Prevents the default action of navigating to the "contacts" section

    const targetSection = "contacts"; // The target section is hardcoded to "contacts" based on the href

    // Remove active classes
    menuItems.forEach((mi) => mi.classList.remove("active"));
    sections.forEach((section) => section.classList.remove("active"));

    // Add active class to the "contacts" section
    e.target.classList.add("active");
    document.getElementById(targetSection).classList.add("active");
  });

  // // Slick Slider Initialization
  // const projects = [
  //   {
  //     title: "Singapore HDB Resale Flat Prices (2017-2024)",
  //     description:
  //       "This project analyzes Singapore HDB resale prices (Jan 2017–Jun 2024), using data analysis and machine learning to uncover trends, key factors, and build predictive models for future prices.",
  //     image: "images/singapore.jpg",
  //     link: "https://github.com/azizbeksiddikov/Analysis_and_Prediction_Singapore_HDB_Resale_Flat_Price/tree/main",
  //   },
  //   {
  //     title: "AI and ML Job Listings in the USA (2022-2024)",
  //     description:
  //       "Analysis of AI/ML job trends in the USA (2022–2024), covering trends, skills gaps, demand forecasting, top sectors, and recommendations for job seekers and employers.",
  //     image: "images/ai_ml_jobs.png",
  //     link: "https://github.com/azizbeksiddikov/AI_ML_Job_Listings",
  //   },
  //   {
  //     title: "Store Sales",
  //     description:
  //       "Sales Data Analysis of a Global Superstore (2014–2018): Trends, top-performing products, customer insights, geographical distribution, and shipping preferences to enhance business strategies and drive growth.",
  //     image: "images/sales.jpg",
  //     link: "https://github.com/azizbeksiddikov/Sales_Data_analysis",
  //   },
  //   {
  //     title: "Computer Vision",
  //     description:
  //       "Object Detection for License Plate Recognition: A computer vision project utilizing YOLO to detect and localize license plates in images or videos for automated processing and analysis.",
  //     image: "images/cv.webp",
  //     link: "https://github.com/azizbeksiddikov/Machine-Learning-Specialization",
  //   },
  //   {
  //     title: "Murder Mystery",
  //     description:
  //       "Object Detection for License Plate Recognition: A computer vision project utilizing YOLO to detect and localize license plates in images or videos for automated processing and analysis.",
  //     image: "images/murder.jpg",
  //     link: "https://github.com/azizbeksiddikov/SQL_Murder_Mystery/tree/main",
  //   },
  // ];

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
    <a href=${project.link} target="_blank">
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

  const prevNextButtons = document.querySelectorAll(
    ".slider--prev, .slider--next"
  );
  prevNextButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const slider = document.querySelector(".slider");
      const sliderChildren = Array.from(slider.children);
      const totalItems = sliderChildren.length;

      const leftItem = slider.querySelector(".slider--item-left");
      const centerItem = slider.querySelector(".slider--item-center");
      const rightItem = slider.querySelector(".slider--item-right");

      const leftIndex = sliderChildren.indexOf(leftItem);
      const centerIndex = sliderChildren.indexOf(centerItem);
      const rightIndex = sliderChildren.indexOf(rightItem);

      // Fade out
      slider.style.opacity = "0";

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
        slider.style.opacity = "1";
      }, 400);
    });
  });
});
