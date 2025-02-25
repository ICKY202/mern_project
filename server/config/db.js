const mongoose = require("mongoose");
// driver
const dbURL = process.env.LOCAL_DB;
console.log(dbURL);
// once
const connectDB = async () => {
try {
await mongoose.connect(dbURL);
console.log("connected to db");
} catch (err) {
console.log(err);
}
};
module.exports = connectDB;