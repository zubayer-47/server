const router = require("express").Router();
const bcrypt = require("bcrypt");
const Data = require("../models/Data");
const User = require("../models/User");

router.get("/home/:search", async (req, res) => {
  console.log(req.params.search);
  try {
    const strMeal = req.params.search;
    const res = await Data.find({
      strMeal: { $regex: new RegExp("^" + strMeal, "i") },
    }).exec();
    res.json(res);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/data", async (req, res) => {
  try {
    const data = await Data.find();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(400).json("User Does Not Exist!");

    const validate = await bcrypt.compare(req.body.password, user.password);
    !validate && res.status(400).json("Wrong Password!");

    const { password, ...others } = user._doc;

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/register", async (req, res) => {
  let { firstName, lastName, email, password, details } = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPass,
      details,
    });

    const { password: paw, ...others } = await newUser.save();
    const { password: pass, ...other } = others._doc;

    res.status(200).json(other);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
