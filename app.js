const express = require("express");
const bodyParser = require("body-parser");
const { connectToDatabase } = require("./config");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const router = express.Router();

const User = require("./Routes/user.js");

app.use("/", User);

async function startServer() {
  try {
    await connectToDatabase();
    app.listen(8080, () => {
      console.log(`server running on port:8080`);
    });
  } catch (error) {
    console.log(error);
  }
}

startServer();

module.exports = router;
