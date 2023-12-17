const express = require("express");
const { auth } = require("../controllers/authController.js");

const router = express.Router();

router.post("/auth", auth);

module.exports = router;
