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

  // Contact Form Submission
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent the default form submission

      const name = document.querySelector('[name="name"]').value;
      const email = document.querySelector('[name="email"]').value;
      const message = document.querySelector('[name="message"]').value;

      const telegramBotToken = "YOUR_BOT_TOKEN";
      const chatId = "YOUR_CHAT_ID";
      const telegramAPIUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

      const messageText = `New Contact Form Submission:
    Name: ${name}
    Email: ${email}
    Message: ${message}`;

      fetch(telegramAPIUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: messageText,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Message sent to Telegram:", data);
          // Optionally show a success message on the webpage
        })
        .catch((error) => {
          console.error("Error sending message to Telegram:", error);
          // Optionally show an error message on the webpage
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
});
