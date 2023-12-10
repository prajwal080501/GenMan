// authCOntroller
const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.auth = async (req, res) => {
    const { name, email, profilePicture } = req.body;
    try {
        const user = await User.findOne({ email });

        if (user) {
            const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
                expiresIn: "7d",
            });
            res.status(200).json({ user: user, token: token });
        }

        const newUser = new User({
            name,
            email,
            profilePicture
        });

        const savedUser = await newUser.save();

        return res.status(200).json({ user: savedUser });

    } catch (error) {
        console.log(error);
    }
}