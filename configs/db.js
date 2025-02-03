const mongoose = require("mongoose");
const config = require("./config");
const dataBaseURL = config.db.url;

mongoose
  .connect(dataBaseURL)
  .then(() => console.log("DataBase Connected..."))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
