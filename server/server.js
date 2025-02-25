const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./config/db');
const userRouter = require('./routes/userRoutes');
const app = express();

app.use(express.json());

connectDB();

app.use('/api/user', userRouter);



app.listen(8000, () => {
    console.log("application started!...");
})