const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
  id: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    match: [
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please fill a valid email address",
    ],
  },
  password: {
    type: String,
    require: true,
  },
  createdOn: {
    type: Date,
    default: () =>
      new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" })),
  },
});

module.exports = mongoose.model("Users", usersSchema);
