const express = require("express");
const {
  addPassword,
  getPasswordByUserId,
  deletePassword,
  exportPasswords
} = require("../controllers/passwordController");
const { verifyToken } = require("../middlewares/verifyToken");

const router = express.Router();

router.post("/password", verifyToken, addPassword);
router.get("/password/:id", verifyToken, getPasswordByUserId);
router.delete("/password/:id", verifyToken, deletePassword);
router.get("/password/export/:id", verifyToken, exportPasswords);

module.exports = router;
