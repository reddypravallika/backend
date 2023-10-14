const User = require("../models/userSchema");
const Deposit = require("../models/depositSchema");
const UserLoan = require("../models/userLoanSchema");
const Withdrawal = require("../models/withdrawalSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const JWT_SECRET_KEY = "Pass@123";

const createUser = async (req, res) => {
  try {
    let uniqueAccountNumber;
    let isUnique = false;

    const branches = ["hyderabad", "bangalore", "delhi", "chennai", "mumbai"];
    function logRandomBranch() {
      const randomIndex = Math.floor(Math.random() * branches.length);
      return branches[randomIndex];
    }
    while (!isUnique) {
      uniqueAccountNumber = Math.floor(
        10000000000 + Math.random() * 90000000000
      ).toString();
      const existingUser = await User.findOne({
        accountNumber: uniqueAccountNumber,
        branchName: logRandomBranch,
      });
      if (!existingUser) {
        isUnique = true;
      }
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newData = {
      ...req.body,
      accountNumber: uniqueAccountNumber,
      password: hashedPassword,
      type: "user",
    };

    const user = new User(newData);
    await user.save();
    const token = jwt.sign(
      { email: newData.email, accountNumber: newData.accountNumber },
      JWT_SECRET_KEY
    );
    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ name: "Internal Server Error", error });
  }
};

const login = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getUserByAccountNumber = async (req, res) => {
  try {
    const { accountNumber } = req.params;
    const user = await User.findOne({ accountNumber });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateUserByAccountNumber = async (req, res) => {
  try {
    const { accountNumber } = req.body?.data;
    const updatedUser = await User.findOneAndUpdate(
      { accountNumber },
      req.body?.data,
      { new: true }
    );
    if (updatedUser) {
      res.status(200).json(updatedUser);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteUserByAccountNumber = async (req, res) => {
  try {
    const accountNumber = req.params.accountNumber;
    const deletedUser = await User.findOneAndDelete({ accountNumber });
    if (deletedUser) {
      res.status(200).json(deletedUser);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const userDepositAmount = async (req, res) => {
  try {
    const { accountNumber, depositAmount, depositorMobile, accountType } =
      req.body;
    const deposit = new Deposit({
      accountNumber,
      depositAmount,
      depositorMobile,
      accountType,
    });
    await deposit.save();
    res.status(201).json(deposit);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const userwithdrawalAmount = async (req, res) => {
  try {
    const { accountNumber, withdrawAmount, mobileNumber } = req.body;
    const withdrawal = new Withdrawal({
      accountNumber,
      withdrawAmount,
      mobileNumber,
    });
    await withdrawal.save();
    res.status(201).json(withdrawal);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const userLoanApplication = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      address,
      city,
      state,
      country,
      pinCode,
      loanType,
      loanAmount,
      loanDuration,
      loanApplyDate,
      branchName,
      accountNumber,
      ifsc,
      course,
      courseFee,
      annualIncome,
      experience,
      totalExperience,
      companyName,
      designation,
      fatherName,
      fatherOccupation,
      rateOfInterest,
    } = req.body;

    const userLoan = new UserLoan({
      firstName,
      lastName,
      address,
      city,
      state,
      country,
      pinCode,
      loanType,
      loanAmount,
      loanDuration,
      loanApplyDate,
      branchName,
      accountNumber,
      ifsc,
      course,
      courseFee,
      annualIncome,
      experience,
      totalExperience,
      companyName,
      designation,
      fatherName,
      fatherOccupation,
      rateOfInterest,
    });

    await userLoan.save(); // Save the loan details to the database

    res.status(201).json({ message: "Loan application created successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createUser,
  getUsers,
  getUserByAccountNumber,
  updateUserByAccountNumber,
  deleteUserByAccountNumber,
  userDepositAmount,
  userwithdrawalAmount,
  userLoanApplication,
  login,
};
