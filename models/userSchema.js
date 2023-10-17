const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter name"],
    },
    username: {
      type: String,
      required: [true, "Please enter username"],
    },
    password: {
      type: String,
      required: [true, "Please enter password"],
    },
    address: {
      type: String,
    },
    state: {
      type: String,
    },
    country: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Please enter email"],
    },
    dob: {
      type: String,
    },
    phone: {
      type: String,
    },
    accountNumber: {
      type: String,
    },
    accountType: {
      type: String,
    },
    branchName: {
      type: String,
    },
    initialDeposit: {
      type: String,
    },
    documentProof: {
      type: String,
    },
    proofDocNo: {
      type: String,
    },
    userType: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("Users", userSchema);
module.exports = User;
