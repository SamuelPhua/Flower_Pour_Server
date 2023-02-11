/*
 ** Username: FlowerPour
 ** Password: rGET2A7AXL5QAMqU
 */

const mongoose = require("mongoose");

// MOVED TO PROCESS.ENV
// const db =
//   "mongodb+srv://FlowerPour:rGET2A7AXL5QAMqU@flowerpour.fe5mpxn.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async (uri) => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Cookies DB connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
