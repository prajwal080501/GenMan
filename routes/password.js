const express = require("express");
const { addPassword } = require("../controllers/passwordController");


const router = express.Router();


router.post("/password", addPassword);

module.exports = router;