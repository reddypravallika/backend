const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

async function connectToDatabase() {
  try {
    await mongoose.connect(
      "mongodb://127.0.0.1:27017/BankManagement"
      // "mongodb+srv://admin:Vivek19@bankmanagement.pub9jkx.mongodb.net/User-Transaction?retryWrites=true&w=majority"
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
}

module.exports = { connectToDatabase };
