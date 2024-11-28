if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Retrieve sensitive information from environment variables
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN.replace(/["';]/g, "");
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID.replace(/["';]/g, "");

app.set("views", "views");
app.set("view engine", "ejs");

// Read projects data

// Routes
app.get("/", (req, res) => {
  res.render("index", { activeSection: "home" });
});

// Contact form submission
app.post("/send-message", async (req, res) => {
  const { name, email, message } = req.body;
  const content = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: content,
        }),
      }
    );

    const telegramData = await response.json();

    res.json({ status: "success", data: telegramData });
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({ status: "error", message: error.message });
  }
});

// app.use("/.netlify/functions/api", router);
// module.exports.handler = serverless(app);
module.exports = app;
