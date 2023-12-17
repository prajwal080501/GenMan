const Password = require("../models/Password");
const bcrypt = require("bcrypt");
const fs = require("fs");
const crypto = require("crypto");
let encryptionKey = "12345678901234567890123456789012";
let iv = "1234567890123456";
function encrypt(text) {
  const cipher = crypto.createCipheriv(
    "aes-256-ctr",
    Buffer.from(encryptionKey),
    iv
  );
  const encrypted = Buffer.concat([
    cipher.update(text, "utf-8"),
    cipher.final(),
  ]);
  return encrypted.toString("hex");
}

function decrypt(encryptedText) {
  const decipher = crypto.createDecipheriv(
    "aes-256-ctr",
    Buffer.from(encryptionKey),
    iv
  );
  const decrypted = Buffer.concat([
    decipher.update(Buffer.from(encryptedText, "hex")),
    decipher.final(),
  ]);
  return decrypted.toString("utf-8");
}

exports.addPassword = async (req, res) => {
  try {
    const { user_id, title, password } = req.body;

    const hashedPassword = encrypt(password);
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

    passwords.forEach((password) => {
      console.log(password.password);
      const decryptedPassword = decrypt(password.password);
      password.password = decryptedPassword.toString();
    });

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

