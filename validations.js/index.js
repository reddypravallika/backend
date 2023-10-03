const isValidAccountIdentifier = (accountIdentifier) => {
  // Assuming the account identifier should be a combination of digits and letters
  const accountIdentifierPattern = /^[0-9]+$/;
  return accountIdentifierPattern.test(accountIdentifier);
};

const isValidAmount = (amount) => {
  // Check if the amount is a non-negative number
  return parseFloat(amount) >= 0;
};

export const validateDepositData = (deposit) => {
  const { depositAmount, depositor } = deposit;

  if (!isValidAmount(depositAmount)) {
    return false;
  }

  const { accountIdentifier, amount, mobileNumber } = depositor;
  if (
    !isValidAccountIdentifier(accountIdentifier) ||
    !isValidAmount(amount) ||
    !mobileNumber
  ) {
    return false;
  }

  return true;
};

export const validateWithdrawalData = (withdrawal) => {
  const { withdrawAmount, withdrawer } = withdrawal;

  if (!isValidAmount(withdrawAmount)) {
    return false;
  }

  const { accountIdentifier, amount, mobileNumber } = withdrawer;
  if (
    !isValidAccountIdentifier(accountIdentifier) ||
    !isValidAmount(amount) ||
    !mobileNumber
  ) {
    return false;
  }

  return true;
};
