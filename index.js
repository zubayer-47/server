const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");

dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(res => console.log("Connected!"))
  .catch((err) => console.log(err));

app.use("/api/", authRoute);

app.listen("5000", () => {
  console.log("Server is running on PORT 5000");
});
