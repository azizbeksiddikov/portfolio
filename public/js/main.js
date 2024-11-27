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

  const sliderContainer = document.querySelector(".center.slider");

  // projects.forEach((project) => {
  //   const projectElement = document.createElement("div");
  //   projectElement.classList.add("item");
  //   projectElement.innerHTML = `
  //         <img src="${project.image}" alt="${project.title}">
  //         <h3>${project.title}</h3>
  //         <p>${project.description}</p>
  //         <a href="${project.link}" class="project-link">View Project</a>
  //     `;
  //   sliderContainer.appendChild(projectElement);
  // });
  projects.forEach((project) => {
    const projectElement = document.createElement("div");
    projectElement.classList.add("item");
    projectElement.innerHTML = `
      <img src="${project.image}" alt="${project.title}">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.link}" class="project-link" target="_blank">View Project</a>
    `;
    sliderContainer.appendChild(projectElement);
  });

  // Initialize Slick slider if jQuery and Slick are available
  if (window.$ && $.fn.slick) {
    $(".center").slick({
      centerMode: true,
      centerPadding: "60px",
      slidesToShow: 3,
      prevArrow: $(".slider-prev"),
      nextArrow: $(".slider-next"),
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "40px",
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "40px",
            slidesToShow: 1,
          },
        },
      ],
    });
  }
});
