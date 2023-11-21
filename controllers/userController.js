const UserModel = require("../models/user");

module.exports.addNewUser = async (req, res) => {
  try {
    const { name, role, email, phoneNumber } = req.body;
    const existingUser = await UserModel.findOne({ email: email });

    if (existingUser) {
      res.status(400).json({ error: "User already exists" });
    } else {
      const newUser = new UserModel({ name, role, email, phoneNumber });

      await newUser.save();
      res.status(201).json(newUser);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports.getAllUser = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports.getUserById = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);

    if (!user) {
      res.status(404).json({ error: "User not found" });
    } else {
      res.json(user);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports.deleteUserById = async (req, res) => {
  try {
    const user = await UserModel.findByIdAndDelete(req.params.id);

    if (!user) {
      res.status(404).json({ error: "User not found" });
    } else {
      res.json(user);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports.updateUserById = async (req, res) => {
  try {
    const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!user) {
      res.status(404).json({ error: "User not found" });
    } else {
      res.json(user);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
