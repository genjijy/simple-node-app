const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello from CI/CD!");
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP" });
});

module.exports = app;
