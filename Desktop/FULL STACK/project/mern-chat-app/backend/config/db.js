const mongoose = require("mongoose");
const colors = require("colors");
const MONGO_URI =
  "mongodb+srv://raisatyam121:7999604308@cluster0.jhkhxk7.mongodb.net/?retryWrites=true&w=majority";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    process.exit(1); // Exit with a non-zero status code to indicate an error
  }
};

module.exports = connectDB;
