const mongoose = require("mongoose");

const transactionSchema = mongoose.Schema(
  {
    accountIdentifier: {
      type: String,
      required: [
        true,
        "Please enter account identifier (accountNumber_accType)",
      ],
    },
    amount: {
      type: String,
      required: [true, "Please enter transaction amount"],
    },
    mobileNumber: {
      type: String,
      required: [true, "Please enter mobile number"],
    },
  },
  {
    timestamps: true,
  }
);

const depositSchema = mongoose.Schema(
  {
    depositAmount: {
      type: String,
      required: [true, "Please enter deposit amount"],
    },
    depositor: transactionSchema,
  },
  {
    timestamps: true,
  }
);

const withdrawalSchema = mongoose.Schema(
  {
    withdrawAmount: {
      type: String,
      required: [true, "Please enter withdrawal amount"],
    },
    withdrawer: transactionSchema,
  },
  {
    timestamps: true,
  }
);

const userTransactionsSchema = mongoose.Schema(
  {
    deposit: depositSchema,
    withdrawal: withdrawalSchema,
  },
  {
    timestamps: true,
  }
);

const UserTransactions = mongoose.model(
  "UserTransactions",
  userTransactionsSchema
);
module.exports = UserTransactions;
