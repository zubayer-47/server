const router = require("express").Router();
const bcrypt = require("bcrypt");
const Data = require("../models/Data");
const User = require("../models/User");

router.get('/s', async (req, res) => {
  try {
    const result = [
      {
        "_id": "6205f5db637ec0d670b11fdf",
        "strMeal": "Tahini Lentils",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/vpxyqt1511464175.jpg",
        "idMeal": "52869"
      },
      {
        "_id": "6205f5db637ec0d670b11fe0",
        "strMeal": "Tamiya",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/n3xxd91598732796.jpg",
        "idMeal": "53026"
      },
      {
        "_id": "6205f5db637ec0d670b11fe1",
        "strMeal": "Tarte Tatin",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/ryspuw1511786688.jpg",
        "idMeal": "52909"
      },
      {
        "_id": "6205f5db637ec0d670b11fe2",
        "strMeal": "Teriyaki Chicken Casserole",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg",
        "idMeal": "52772"
      },
      {
        "_id": "6205f5db637ec0d670b11fe3",
        "strMeal": "Timbits",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/txsupu1511815755.jpg",
        "idMeal": "52929"
      },
      {
        "_id": "6205f5db637ec0d670b11fe4",
        "strMeal": "Toad In The Hole",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/ytuvwr1503070420.jpg",
        "idMeal": "52822"
      },
      {
        "_id": "6205f5db637ec0d670b11fe5",
        "strMeal": "Tonkatsu pork",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/lwsnkl1604181187.jpg",
        "idMeal": "53032"
      },
      {
        "_id": "6205f5db637ec0d670b11fe6",
        "strMeal": "Treacle Tart",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/wprvrw1511641295.jpg",
        "idMeal": "52892"
      },
      {
        "_id": "6205f5db637ec0d670b11fe7",
        "strMeal": "Tuna Nicoise",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/yypwwq1511304979.jpg",
        "idMeal": "52852"
      },
      {
        "_id": "6205f5db637ec0d670b11fe8",
        "strMeal": "Tunisian Orange Cake",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/y4jpgq1560459207.jpg",
        "idMeal": "52970"
      },
      {
        "_id": "6205f5db637ec0d670b11fe9",
        "strMeal": "Vegan Chocolate Cake",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/qxutws1486978099.jpg",
        "idMeal": "52794"
      },
      {
        "_id": "6205f5db637ec0d670b11fea",
        "strMeal": "Vegetarian Chilli",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/wqurxy1511453156.jpg",
        "idMeal": "52867"
      },
      {
        "_id": "6205f5db637ec0d670b11feb",
        "strMeal": "White chocolate creme brulee",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/uryqru1511798039.jpg",
        "idMeal": "52917"
      },
      {
        "_id": "6205f5db637ec0d670b11fec",
        "strMeal": "Yaki Udon",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/wrustq1511475474.jpg",
        "idMeal": "52871"
      }
    ]

    result.forEach(async obj => {
      obj.price = Math.floor(Math.random() * 500)
    });
    
    console.log(result);

    res.json(result)
  } catch (error) {
    res.json(error)
  }
})

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(400).json("User Does Not Exist!");

    const validate = await bcrypt.compare(req.body.password, user.password);
    !validate && res.status(400).json("Wrong Password!");
    
    const { password, ...others } = user._doc;
    
    const data = await Data.find()

    res.status(200).json([user, data]);
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get("/home", async (req, res) => {
//   try {
//     const data = await Data.find().limit(20);

//     res.status(200).json(data)
//   } catch (error) {
//     res.status(500).json(error)
//   }
// })

router.get('/home/:search', async (req, res) => {
  console.log(req.params.search);
  try {
    const strMeal = req.params.search
    const res = await Data.find({strMeal: { $regex: new RegExp('^'+strMeal, 'i') }}).exec();
    res.json(res)
  } catch (error) {
    res.status(500).json(error)
  }
})

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

    const {password: paw, ...others} = await newUser.save();
    const { password: pass, ...other } = others._doc;

    res.status(200).json(other);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
