const express = require("express");
const User = require("../model/userModel");
const {register, login, currentUser} = require("../controller/userController");
const {authentication} = require('../middlewares/authMiddleware');

const userRouter = express.Router();
// Register a user
userRouter.post("/register", register);
userRouter.post("/login", login);

userRouter.get("/currentUser", authentication, currentUser);
module.exports = userRouter;