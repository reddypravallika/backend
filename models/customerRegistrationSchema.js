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
    confirmPassword: {
      type: String,
      required: [true, "Please confirm password"],
    },
    address: {
      type: String,
      required: [true, "Please enter address"],
    },
    state: {
      type: String,
      required: [true, "Please enter state"],
    },
    country: {
      type: String,
      required: [true, "Please enter country"],
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
      required: [true, "Please enter phone number"],
    },
    accountNumber: {
      type: String,
    },
    accountType: {
      type: String,
      required: [true, "Please enter account type"],
    },
    branchName: {
      type: String,
    },
    initialDeposit: {
      type: String,
      required: [true, "Please enter initial deposit"],
    },
    documentProof: {
      type: String,
    },
    proofDocNo: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("Users", userSchema);
module.exports = User;
