// authCOntroller
const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.auth = async (req, res) => {
    const {  name, email, profilePicture } = req.body;
    try {
        const user = await User.findOne({ email });

        if (!user) {
            const newUser = new User({
                name,
                email,
                profilePicture
            });
    
            const savedUser = await newUser.save();
            const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
                expiresIn: "7d",
            });
            return res.status(200).json({ user: savedUser, token: token });
        }
        else {
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });
       return  res.status(200).json({ user: user, token: token });
    }

    } catch (error) {
        console.log(error);
    }
}