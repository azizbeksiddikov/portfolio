const express = require("express");
const fs = require("fs");
const path = require("path");
const nodemailer = require("nodemailer");

const app = express();

// Read projects data
const projects = JSON.parse(fs.readFileSync("./data/projects.json", "utf8"));

// Routes
app.get("/", (req, res) => {
  res.render("index", {
    projects: projects,
    activeSection: "home",
  });
});

// Contact form submission
app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  // Configure nodemailer (you'll need to replace with your actual email credentials)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your-email@gmail.com",
      pass: "your-email-password",
    },
  });

  const mailOptions = {
    from: email,
    to: "azbeksid@gmail.com",
    subject: `Portfolio Contact from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send("Error sending email");
    }
    res.status(200).send("Email sent successfully");
  });
});

module.exports = app;
