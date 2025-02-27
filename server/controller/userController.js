const jwt = require('jsonwebtoken');
const User = require('./../model/userModel');


exports.register = async (req, res) => {
    try {
        const userExists = await User.findOne({ email: req.body.email });
        if (userExists) {
            return res.send({
            success: false,
            message: "User Already Exists",
            });
        }
        const newUser = new User(req.body);
        await newUser.save();
        const token = jwt.sign({ userId: newUser._id}, process.env.JWT_SECRET, {expiresIn: "1d"});
        res.send({
        success: true,
        message: "Registration Successful, Please login",
        data: token
        });
    } catch (error) {
        console.log(error);
    }
}

exports.login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
        return res.send({
        success: false,
        message: "User does not exist. Please register.",
        });
    }
    // Simplified password validation (assuming passwords are stored in plain text, which is not recommended)
    if (req.body.password !== user.password) {
        return res.send({
        success: false,
        message: "Sorry, invalid password entered!",
        });
    }
    const token = jwt.sign({ userId: user._id}, process.env.JWT_SECRET, {expiresIn: "1d"});
    res.send({
        success: true,
        message: "You've successfully logged in!",
        data: token
    });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: "An error occurred. Please try again later.",
        });
    }
}
