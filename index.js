const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const cors = require('cors')
const rateLimit = require('express-rate-limit')

// const limit = rateLimit({
//   max: 10,
//   windowMs: 1000,
// })

app.use(cors())
dotenv.config();
app.use(express.json());

// app.use('api/login', limit)

mongoose
  .connect(process.env.MONGO_URL, (err, db) => {
    // const collection = db.collection("data")
    // collection.find().toArray((err, d) => {
    //   console.log(d);
    // })
    if (!err) {
      console.log('connected');
    }
  })

app.use("/api", authRoute);

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
