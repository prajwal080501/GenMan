const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const passwordRoutes = require("./routes/password.js");
const authRoutes = require("./routes/auth.js");
const cors = require("cors");
const bodyParser = require("body-parser");
dotenv.config();
const port = process.env.PORT;
const url = process.env.MONGO_URI;
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", passwordRoutes);
app.use("/api", authRoutes);

app.listen(port, () => {
  try {
    mongoose.connect(url);
    console.log("Server running");
    console.log("Database Connected");
  } catch (error) {
    console.log(error);
  }
});
