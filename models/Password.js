const mongoose = require("mongoose");

const PasswordSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
})

const Password = mongoose.model("User", PasswordSchema)
module.exports = Password;