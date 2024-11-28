require("dotenv").config();
console.log("worked");
const express = require("express");
const app = express();
const fs = require("fs");
const livereload = require("livereload");
const res = require("express/lib/response");
const path = require("path");
const nodemailer = require("nodemailer");
// const fetch = require("node-fetch");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Retrieve sensitive information from environment variables
let TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN.replace(/["';]/g, "");
let TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID.replace(/["';]/g, "");

app.set("views", "views");
app.set("view engine", "ejs");

// Read projects data
const projects = JSON.parse(fs.readFileSync("./data/projects.json", "utf8"));
// console.log(projects);

// Routes

app.get("/", (req, res) => {
  res.render("index", {
    projects: projects,
    projectsLength: projects.length, // Pass length as a separate variable
    activeSection: "home",
  });
});

// Contact form submission
app.post("/send-message", async (req, res) => {
  const { name, email, message } = req.body;
  const content = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

  try {
    let response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: content,
        }),
      }
    );

    const telegramData = await response.json();
    console.log("Telegram message sent", telegramData);

    res.json({ status: "success", data: telegramData });
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({ status: "error", message: error.message });
  }
});

module.exports = app;
