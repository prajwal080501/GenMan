const Password = require("../models/Password");
const bcrypt = require("bcrypt");
exports.addPassword = async (req, res) => {
    try {
        const { title, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newPassword = new Password({
            title,
            password: hashedPassword
        })

        await newPassword.save();

        return res.status(200).json({
            message: "Password added successfully"
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}