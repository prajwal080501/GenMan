const Password = require("../models/Password");
const bcrypt = require("bcrypt");
const fs = require("fs");
exports.addPassword = async (req, res) => {
  try {
    const { user_id, title, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newPassword = new Password({
      user_id,
      title,
      password: hashedPassword,
    });

    await newPassword.save();

    return res.status(200).json({
      message: "Password added successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.getPasswordByUserId = async (req, res) => {
  try {
    const { id } = req.params;

    const passwords = await Password.find({ user_id: id });

    return res.status(200).json({
      passwords,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.deletePassword = async (req, res) => {
  const { id } = req.params;
  try {
    const password = await Password.findByIdAndDelete(id);

    if (!password) {
      return res.status(404).json({
        message: "Password not found",
      });
    }

    return res.status(200).json({
      message: "Password deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.exportPasswords = async (req, res) => {
  try {
    const { id } = req.params;
    const passwords = await Password.find({ user_id: id });
    const data = JSON.stringify(passwords);
    console.log(data);
    fs.writeFileSync("passwords.json", data);
    res.download("passwords.json");
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
