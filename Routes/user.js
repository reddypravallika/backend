const express = require("express");
const {
  createUser,
  getUsers,
  getUserByAccountNumber,
  updateUserByAccountNumber,
  deleteUserByAccountNumber,
  userDepositAmount,
  userwithdrawalAmount,
  userLoanApplication,
  login,
  userProfile,
  createAdminUser,
  getLoans,
} = require("../controllers/userController");

const router = express.Router();

router.post("/user-register", createUser);

router.post("/admin-register", createAdminUser);

router.post("/user-login", login);

router.get("/user-profile", userProfile);

router.get("/users", getUsers);

router.get("/loans", getLoans);

router.get("/user/:accountNumber", getUserByAccountNumber);

router.put("/user/:accountNumber", updateUserByAccountNumber);

router.delete("/user/:accountNumber", deleteUserByAccountNumber);

router.post("/deposit", userDepositAmount);

router.post("/withdrawal", userwithdrawalAmount);

router.post("/apply-loan", userLoanApplication);

module.exports = router;
