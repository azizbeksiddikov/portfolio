// netlify/functions/server.js
const serverless = require("serverless-http");
const app = require("../../app"); // Adjust the path to your app.js

module.exports.handler = serverless(app);
