console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const fs = require("fs");
const livereload = require("livereload");
const res = require("express/lib/response");
const path = require("path");
const nodemailer = require("nodemailer");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("views", "views");
app.set("view engine", "ejs");

// Read projects data
const projects = JSON.parse(fs.readFileSync("./data/projects.json", "utf8"));

// Routes
app.get("/", (req, res) => {
  res.render("index", {
    projects: projects,
    projectsLength: projects.length, // Pass length as a separate variable
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
