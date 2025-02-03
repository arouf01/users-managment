const { v4: uuidv4 } = require("uuid");
const Users = require("../models/usersModel");

// All Users Get
const getAllUsers = async (req, res) => {
  try {
    const getAllUsers = await Users.find();
    res.status(200).send(getAllUsers);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Get a Single User
const getAUser = async (req, res) => {
  try {
    const getUser = await Users.findOne({ id: req.params.id });
    res.status(200).send(getUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Create a New User
const createUser = async (req, res) => {
  try {
    const newUser = new Users({
      id: uuidv4(),
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    await newUser.save();
    res.status(201).send(newUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Update a User
const updateUser = async (req, res) => {
  try {
    const getUser = await Users.findOne({ id: req.params.id });
    getUser.username = req.body.username;
    getUser.email = req.body.email;
    getUser.password = req.body.password;
    await getUser.save();
    res.status(200).send(getUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Delete a User
const deleteUser = async (req, res) => {
  try {
    await Users.deleteOne({ id: req.params.id });
    res.status(200).json({ message: "User Deleted!" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getAllUsers, getAUser, createUser, updateUser, deleteUser };
