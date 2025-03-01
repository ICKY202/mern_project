const jwt = require("jsonwebtoken");

exports.authentication = (req,res,next) => {
    const authHeader = req.headers.authorization;
    try {
        if(authHeader) {
            const token = authHeader.split(" ")[1];
            console.log(token);
            const verifiedToken = jwt.verify(token, process.env.JWT_SECRET);
            req.body.userId = verifiedToken.userId;
            next();
        }else {
            res.status(401).json({message: "Authorization missing"});
        }
    }catch(err) {
        res.status(401).send({success: false, message: "Invalid Token"});
    }
}