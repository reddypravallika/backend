const mongoose = require("mongoose");

const withdrawalSchema = mongoose.Schema(
  {
    accountNumber: {
      type: String,
      required: true,
    },
    withdrawAmount: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Withdrawal = mongoose.model("Withdrawal", withdrawalSchema);
module.exports = Withdrawal;
