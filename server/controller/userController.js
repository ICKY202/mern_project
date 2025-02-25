const userModel = require('./../model/userModel');

exports.register = async (req,res) => {
    try {
        const userExists = await userModel.findOne({email: req.body.email});

        if(userExists) {
            return res.send({success: false, message: "User Already Exists"});
        }
        const newUser = new userModel({name: req.body.name, email: req.body.email, password: req.body.password});
        await newUser.save();
        res.send({success: true, message: "Registration Successful, Please login"});
    }catch(err) {
        console.log(err);
    }
}
