const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const cors = require('cors')

app.use(cors())
dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected"))
  .catch(err => console.log(err))

app.use("/api", authRoute);

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
