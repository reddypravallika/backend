const branches = ["hyderabad", "bangalore", "delhi", "chennai", "mumbai"];

// Function to log a random branch from the branches array
function logRandomBranch() {
  const randomIndex = Math.floor(Math.random() * branches.length);
  console.log(branches[randomIndex]);
}

// Call the function to log a random branch
logRandomBranch();
