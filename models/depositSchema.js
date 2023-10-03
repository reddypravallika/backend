const mongoose = require("mongoose");

const depositSchema = mongoose.Schema(
  {
    accountNumber: {
      type: String,
      required: true,
    },
    depositAmount: {
      type: String,
      required: true,
    },
    depositorMobile: {
      type: String,
      required: true,
    },
    accountType: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Deposit = mongoose.model("Deposit", depositSchema);
module.exports = Deposit;
