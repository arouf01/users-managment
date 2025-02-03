const {
  getAllUsers,
  getAUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/usersController");

const usersRoutes = require("express").Router();

// All Users Get
usersRoutes.get("/users", getAllUsers);
// Get a Single User
usersRoutes.get("/users/:id", getAUser);
// Create a New User
usersRoutes.post("/users", createUser);
// Update a User
usersRoutes.patch("/users/:id", updateUser);
// Delete a User
usersRoutes.delete("/users/:id", deleteUser);

module.exports = usersRoutes;
