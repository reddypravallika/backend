const mongoose = require("mongoose");

const userLoanSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  country: {
    type: String,
  },
  pinCode: {
    type: String,
  },
  loanType: {
    type: String,
  },
  loanAmount: {
    type: Number,
  },
  loanDuration: {
    type: Number,
  },
  loanApplyDate: {
    type: Date,
  },
  branchName: {
    type: String,
  },
  accountNumber: {
    type: String,
  },
  ifsc: {
    type: String,
  },
  course: {
    type: String,
  },
  courseFee: {
    type: Number,
  },
  annualIncome: {
    type: Number,
  },
  experience: {
    type: Number,
  },
  totalExperience: {
    type: Number,
  },
  companyName: {
    type: String,
  },
  designation: {
    type: String,
  },
  fatherName: {
    type: String,
  },
  fatherOccupation: {
    type: String,
  },
  rateOfInterest: {
    type: Number,
  },
});

const UserLoan = mongoose.model("UserLoan", userLoanSchema);

module.exports = UserLoan;
