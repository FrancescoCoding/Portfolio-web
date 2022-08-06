const express = require("express");
const app = express();
const projects = require("./routes/projects");
const serverless = require("serverless-http");

app.use("/api/projects", projects);

app
  .get("/api", (req, res) => {
    res.send("Hello World <h1> from Express </h1>");
  })
  .listen(5000, () => {
    console.log("Server started on port 5000");
  })
  .on("error", err => {
    console.log(err);
  })
  .on("listening", () => {
    console.log("Server started on port 5000");
  })
  .on("close", () => {
    console.log("Server closed");
  })
  .on("connection", () => {
    console.log("Connection established");
  });

module.exports = app;
module.exports.handler = serverless(app);
