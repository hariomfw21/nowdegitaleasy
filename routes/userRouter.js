const express = require("express");
const bcrypt = require("bcrypt");
const UserModel = require("../models/user");
const { addNewUser, getAllUser, getUserById, deleteUserById, updateUserById } = require("../controllers/userController");

const userRoute = express.Router();

// ........................ User Registration: ..................................//

userRoute.post("/register",addNewUser );

// ........................ Get All Users: ..................................//

userRoute.get("/", getAllUser);

// ........................ Get Single User: ..................................//

userRoute.get("/:id", getUserById);

// ........................ Delete User: ..................................//

userRoute.delete("/:id", deleteUserById );

// ........................ Update User: ..................................//

userRoute.put("/:id", updateUserById );



module.exports = {
  userRoute,
};
