const express = require("express");
const User = require("../model/userModel");
const {register, login} = require("../controller/userController");

const userRouter = express.Router();
// Register a user
userRouter.post("/register", register);
userRouter.post("/login", login);
    
module.exports = userRouter;