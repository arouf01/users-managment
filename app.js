const express = require("express");
const app = express();
const cors = require("cors");
require("./configs/db");
const usersRoutes = require("./routes/usersRoutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Home Route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/./views/index.html");
});

// Users Routers
app.use("/api", usersRoutes);

app.use((req, res, next) => {
  res.status(404).json({
    message: "404 URL NOT FOUND!",
  });
});

app.use((err, req, res, next) => {
  res.status(500).json({
    message: "Something Broke!",
  });
});

module.exports = app;
