const express = require("express");
const path = require("path");
const app = require("./app");

const PORT = process.env.PORT || 3000;

// Configure Express app
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
