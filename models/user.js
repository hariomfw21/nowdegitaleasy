const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    role: { type: String, required: true,enum:["user","customer"], default: "user" },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
