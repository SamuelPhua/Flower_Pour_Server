/*
** Username: FlowerPour
** Password: rGET2A7AXL5QAMqU
*/

const mongoose = require("mongoose");

const db =
  "mongodb+srv://FlowerPour:rGET2A7AXL5QAMqU@flowerpour.fe5mpxn.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("DB connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
