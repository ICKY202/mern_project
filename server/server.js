const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./config/db');
const userRouter = require('./routes/userRoutes');
const movieRouter = require('./routes/movieRoute');

const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

connectDB();

app.use('/api/user', userRouter);
app.use('/api/movies', movieRouter);



app.listen(8083, () => {
    console.log("application started!...");
})