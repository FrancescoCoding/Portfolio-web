const express = require("express");
const app = express();
const projects = require("./routes/projects");
const serverless = require("serverless-http");

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

app
  .get("/", (req, res) => {
    res.send("Hello World <h1> from Express </h1>");
  })
  .listen(process.env.PORT || 5000, () => {
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

app.use("/api", projects);

module.exports.handler = serverless(app);
