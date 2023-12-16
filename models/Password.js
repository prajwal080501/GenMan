const mongoose = require("mongoose");

const PasswordSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    // description: {
    //     type: String,
    //     required: true,
    // },
    password: {
        type: String,
        required: true
    },
    isOld: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    timestamps: true
})

const Password = mongoose.model("Password", PasswordSchema)
module.exports = Password;