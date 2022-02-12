const router = require("express").Router();
const bcrypt = require("bcrypt");
const Data = require("../models/Data");
const User = require("../models/User");

router.get('/s', async (req, res) => {
  try {
    const result = [
      [
        {
          "_id": "6205f5db637ec0d670b11f65",
          "strMeal": " Bubble & Squeak",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/xusqvw1511638311.jpg",
          "idMeal": "52885",
          "price": 372
        },
        {
          "_id": "6205f5db637ec0d670b11f66",
          "strMeal": "Apam balik",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/adxcbq1619787919.jpg",
          "idMeal": "53049",
          "price": 199
        },
        {
          "_id": "6205f5db637ec0d670b11f67",
          "strMeal": "Apple & Blackberry Crumble",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/xvsurr1511719182.jpg",
          "idMeal": "52893",
          "price": 166
        },
        {
          "_id": "6205f5db637ec0d670b11f68",
          "strMeal": "Apple Frangipan Tart",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg",
          "idMeal": "52768",
          "price": 349
        },
        {
          "_id": "6205f5db637ec0d670b11f69",
          "strMeal": "Baingan Bharta",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/urtpqw1487341253.jpg",
          "idMeal": "52807",
          "price": 350
        },
        {
          "_id": "6205f5db637ec0d670b11f6a",
          "strMeal": "Baked salmon with fennel & tomatoes",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/1548772327.jpg",
          "idMeal": "52959",
          "price": 199
        },
        {
          "_id": "6205f5db637ec0d670b11f6b",
          "strMeal": "Bakewell tart",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/wyrqqq1468233628.jpg",
          "idMeal": "52767",
          "price": 244
        },
        {
          "_id": "6205f5db637ec0d670b11f6c",
          "strMeal": "Banana Pancakes",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/sywswr1511383814.jpg",
          "idMeal": "52855",
          "price": 466
        },
        {
          "_id": "6205f5db637ec0d670b11f6d",
          "strMeal": "Bean & Sausage Hotpot",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/vxuyrx1511302687.jpg",
          "idMeal": "52848",
          "price": 214
        },
        {
          "_id": "6205f5db637ec0d670b11f6e",
          "strMeal": "Beef Banh Mi Bowls with Sriracha Mayo, Carrot & Pickled Cucumber",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/z0ageb1583189517.jpg",
          "idMeal": "52997",
          "price": 113
        },
        {
          "_id": "6205f5db637ec0d670b11f6f",
          "strMeal": "Boulangère Potatoes",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/qywups1511796761.jpg",
          "idMeal": "52914",
          "price": 366
        },
        {
          "_id": "6205f5db637ec0d670b11f70",
          "strMeal": "Bread and Butter Pudding",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/xqwwpy1483908697.jpg",
          "idMeal": "52792",
          "price": 37
        },
        {
          "_id": "6205f5db637ec0d670b11f71",
          "strMeal": "Breakfast Potatoes",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/1550441882.jpg",
          "idMeal": "52965",
          "price": 499
        },
        {
          "_id": "6205f5db637ec0d670b11f72",
          "strMeal": "Brie wrapped in prosciutto & brioche",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/qqpwsy1511796276.jpg",
          "idMeal": "52913",
          "price": 368
        },
        {
          "_id": "6205f5db637ec0d670b11f73",
          "strMeal": "Broccoli & Stilton soup",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/tvvxpv1511191952.jpg",
          "idMeal": "52842",
          "price": 164
        },
        {
          "_id": "6205f5db637ec0d670b11f74",
          "strMeal": "Budino Di Ricotta",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/1549542877.jpg",
          "idMeal": "52961",
          "price": 312
        },
        {
          "_id": "6205f5db637ec0d670b11f75",
          "strMeal": "Burek",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/tkxquw1628771028.jpg",
          "idMeal": "53060",
          "price": 178
        },
        {
          "_id": "6205f5db637ec0d670b11f76",
          "strMeal": "Callaloo Jamaican Style",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/ussyxw1515364536.jpg",
          "idMeal": "52939",
          "price": 220
        },
        {
          "_id": "6205f5db637ec0d670b11f77",
          "strMeal": "Canadian Butter Tarts",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/wpputp1511812960.jpg",
          "idMeal": "52923",
          "price": 470
        },
        {
          "_id": "6205f5db637ec0d670b11f78",
          "strMeal": "Cashew Ghoriba Biscuits",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/t3r3ka1560461972.jpg",
          "idMeal": "52976",
          "price": 66
        },
        {
          "_id": "6205f5db637ec0d670b11f79",
          "strMeal": "Chicken Congee",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/1529446352.jpg",
          "idMeal": "52956",
          "price": 222
        },
        {
          "_id": "6205f5db637ec0d670b11f7a",
          "strMeal": "Chicken Couscous",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/qxytrx1511304021.jpg",
          "idMeal": "52850",
          "price": 352
        },
        {
          "_id": "6205f5db637ec0d670b11f7b",
          "strMeal": "Chicken Karaage",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/tyywsw1505930373.jpg",
          "idMeal": "52831",
          "price": 46
        },
        {
          "_id": "6205f5db637ec0d670b11f7c",
          "strMeal": "Chicken Marengo",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/qpxvuq1511798906.jpg",
          "idMeal": "52920",
          "price": 294
        },
        {
          "_id": "6205f5db637ec0d670b11f7d",
          "strMeal": "Chinon Apple Tarts",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/qtqwwu1511792650.jpg",
          "idMeal": "52910",
          "price": 300
        },
        {
          "_id": "6205f5db637ec0d670b11f7e",
          "strMeal": "Chivito uruguayo",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/n7qnkb1630444129.jpg",
          "idMeal": "53063",
          "price": 252
        },
        {
          "_id": "6205f5db637ec0d670b11f7f",
          "strMeal": "Chocolate Avocado Mousse",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/uttuxy1511382180.jpg",
          "idMeal": "52853",
          "price": 306
        },
        {
          "_id": "6205f5db637ec0d670b11f80",
          "strMeal": "Chocolate Caramel Crispy",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/1550442508.jpg",
          "idMeal": "52966",
          "price": 241
        },
        {
          "_id": "6205f5db637ec0d670b11f81",
          "strMeal": "Chocolate Gateau",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/tqtywx1468317395.jpg",
          "idMeal": "52776",
          "price": 275
        },
        {
          "_id": "6205f5db637ec0d670b11f82",
          "strMeal": "Chocolate Raspberry Brownies",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/yypvst1511386427.jpg",
          "idMeal": "52860",
          "price": 241
        },
        {
          "_id": "6205f5db637ec0d670b11f83",
          "strMeal": "Christmas Pudding Flapjack",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/vvusxs1483907034.jpg",
          "idMeal": "52788",
          "price": 256
        },
        {
          "_id": "6205f5db637ec0d670b11f84",
          "strMeal": "Christmas Pudding Trifle",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/r33cud1576791081.jpg",
          "idMeal": "52989",
          "price": 428
        },
        {
          "_id": "6205f5db637ec0d670b11f85",
          "strMeal": "Coddled pork with cider",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/7vpsfp1608588991.jpg",
          "idMeal": "53037",
          "price": 440
        },
        {
          "_id": "6205f5db637ec0d670b11f86",
          "strMeal": "Corned Beef and Cabbage",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/xb97a81583266727.jpg",
          "idMeal": "52998",
          "price": 239
        },
        {
          "_id": "6205f5db637ec0d670b11f87",
          "strMeal": "Crispy Sausages and Greens",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/st1ifa1583267248.jpg",
          "idMeal": "52999",
          "price": 67
        },
        {
          "_id": "6205f5db637ec0d670b11f88",
          "strMeal": "Croatian Bean Stew",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/tnwy8m1628770384.jpg",
          "idMeal": "53058",
          "price": 468
        },
        {
          "_id": "6205f5db637ec0d670b11f89",
          "strMeal": "Duck Confit",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/wvpvsu1511786158.jpg",
          "idMeal": "52907",
          "price": 66
        },
        {
          "_id": "6205f5db637ec0d670b11f8a",
          "strMeal": "Egg Drop Soup",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/1529446137.jpg",
          "idMeal": "52955",
          "price": 204
        },
        {
          "_id": "6205f5db637ec0d670b11f8b",
          "strMeal": "English Breakfast",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/utxryw1511721587.jpg",
          "idMeal": "52895",
          "price": 425
        },
        {
          "_id": "6205f5db637ec0d670b11f8c",
          "strMeal": "Eton Mess",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/uuxwvq1483907861.jpg",
          "idMeal": "52791",
          "price": 67
        },
        {
          "_id": "6205f5db637ec0d670b11f8d",
          "strMeal": "Fennel Dauphinoise",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/ytttsv1511798734.jpg",
          "idMeal": "52919",
          "price": 32
        },
        {
          "_id": "6205f5db637ec0d670b11f8e",
          "strMeal": "Feteer Meshaltet",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/9f4z6v1598734293.jpg",
          "idMeal": "53030",
          "price": 396
        },
        {
          "_id": "6205f5db637ec0d670b11f8f",
          "strMeal": "Fettucine alfredo",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/uquqtu1511178042.jpg",
          "idMeal": "52835",
          "price": 83
        },
        {
          "_id": "6205f5db637ec0d670b11f90",
          "strMeal": "French Lentils With Garlic and Thyme",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/vwwspt1487394060.jpg",
          "idMeal": "52815",
          "price": 122
        },
        {
          "_id": "6205f5db637ec0d670b11f91",
          "strMeal": "French Omelette",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/yvpuuy1511797244.jpg",
          "idMeal": "52915",
          "price": 186
        },
        {
          "_id": "6205f5db637ec0d670b11f92",
          "strMeal": "French Onion Soup",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/xvrrux1511783685.jpg",
          "idMeal": "52903",
          "price": 265
        },
        {
          "_id": "6205f5db637ec0d670b11f93",
          "strMeal": "Fresulth sardines",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/nv5lf31628771380.jpg",
          "idMeal": "53061",
          "price": 199
        },
        {
          "_id": "6205f5db637ec0d670b11f94",
          "strMeal": "Fruit and Cream Cheese Breakfast Pastries",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/1543774956.jpg",
          "idMeal": "52957",
          "price": 209
        },
        {
          "_id": "6205f5db637ec0d670b11f95",
          "strMeal": "Ful Medames",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/lvn2d51598732465.jpg",
          "idMeal": "53025",
          "price": 494
        },
        {
          "_id": "6205f5db637ec0d670b11f96",
          "strMeal": "Full English Breakfast",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/sqrtwu1511721265.jpg",
          "idMeal": "52896",
          "price": 458
        },
        {
          "_id": "6205f5db637ec0d670b11f97",
          "strMeal": "Garides Saganaki",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/wuvryu1468232995.jpg",
          "idMeal": "52764",
          "price": 391
        },
        {
          "_id": "6205f5db637ec0d670b11f98",
          "strMeal": "Gigantes Plaki",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/b79r6f1585566277.jpg",
          "idMeal": "53012",
          "price": 325
        },
        {
          "_id": "6205f5db637ec0d670b11f99",
          "strMeal": "Gołąbki (cabbage roll)",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/q8sp3j1593349686.jpg",
          "idMeal": "53021",
          "price": 155
        },
        {
          "_id": "6205f5db637ec0d670b11f9a",
          "strMeal": "Grilled Portuguese sardines",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/lpd4wy1614347943.jpg",
          "idMeal": "53041",
          "price": 361
        },
        {
          "_id": "6205f5db637ec0d670b11f9b",
          "strMeal": "Ham hock colcannon",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/n41ny81608588066.jpg",
          "idMeal": "53035",
          "price": 223
        },
        {
          "_id": "6205f5db637ec0d670b11f9c",
          "strMeal": "Home-made Mandazi",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/thazgm1555350962.jpg",
          "idMeal": "52967",
          "price": 169
        },
        {
          "_id": "6205f5db637ec0d670b11f9d",
          "strMeal": "Honey Balsamic Chicken with Crispy Broccoli & Potatoes",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/kvbotn1581012881.jpg",
          "idMeal": "52993",
          "price": 184
        },
        {
          "_id": "6205f5db637ec0d670b11f9e",
          "strMeal": "Honey Teriyaki Salmon",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/xxyupu1468262513.jpg",
          "idMeal": "52773",
          "price": 331
        },
        {
          "_id": "6205f5db637ec0d670b11f9f",
          "strMeal": "Honey Yogurt Cheesecake",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/y2irzl1585563479.jpg",
          "idMeal": "53007",
          "price": 324
        },
        {
          "_id": "6205f5db637ec0d670b11fa0",
          "strMeal": "Hot Chocolate Fudge",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/xrysxr1483568462.jpg",
          "idMeal": "52787",
          "price": 17
        },
        {
          "_id": "6205f5db637ec0d670b11fa1",
          "strMeal": "Jam Roly-Poly",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/ysqupp1511640538.jpg",
          "idMeal": "52890",
          "price": 73
        },
        {
          "_id": "6205f5db637ec0d670b11fa2",
          "strMeal": "Japanese gohan rice",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/kw92t41604181871.jpg",
          "idMeal": "53033",
          "price": 364
        },
        {
          "_id": "6205f5db637ec0d670b11fa3",
          "strMeal": "Japanese Katsudon",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/d8f6qx1604182128.jpg",
          "idMeal": "53034",
          "price": 93
        },
        {
          "_id": "6205f5db637ec0d670b11fa4",
          "strMeal": "Kafteji",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/1bsv1q1560459826.jpg",
          "idMeal": "52971",
          "price": 441
        },
        {
          "_id": "6205f5db637ec0d670b11fa5",
          "strMeal": "Kapsalon",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/sxysrt1468240488.jpg",
          "idMeal": "52769",
          "price": 300
        },
        {
          "_id": "6205f5db637ec0d670b11fa6",
          "strMeal": "Keleya Zaara",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/8x09hy1560460923.jpg",
          "idMeal": "52974",
          "price": 25
        },
        {
          "_id": "6205f5db637ec0d670b11fa7",
          "strMeal": "Key Lime Pie",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/qpqtuu1511386216.jpg",
          "idMeal": "52859",
          "price": 82
        },
        {
          "_id": "6205f5db637ec0d670b11fa8",
          "strMeal": "Koshari",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/4er7mj1598733193.jpg",
          "idMeal": "53027",
          "price": 292
        },
        {
          "_id": "6205f5db637ec0d670b11fa9",
          "strMeal": "Kumpir",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/mlchx21564916997.jpg",
          "idMeal": "52978",
          "price": 258
        },
        {
          "_id": "6205f5db637ec0d670b11faa",
          "strMeal": "Laksa King Prawn Noodles",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/rvypwy1503069308.jpg",
          "idMeal": "52821",
          "price": 328
        },
        {
          "_id": "6205f5db637ec0d670b11fab",
          "strMeal": "Lamb and Lemon Souvlaki",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/rjhf741585564676.jpg",
          "idMeal": "53009",
          "price": 18
        },
        {
          "_id": "6205f5db637ec0d670b11fac",
          "strMeal": "Lamb and Potato pie",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/sxrpws1511555907.jpg",
          "idMeal": "52877",
          "price": 15
        },
        {
          "_id": "6205f5db637ec0d670b11fad",
          "strMeal": "Lancashire hotpot",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/uttrxw1511637813.jpg",
          "idMeal": "52884",
          "price": 301
        },
        {
          "_id": "6205f5db637ec0d670b11fae",
          "strMeal": "Lasagna Sandwiches",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/xr0n4r1576788363.jpg",
          "idMeal": "52987",
          "price": 338
        },
        {
          "_id": "6205f5db637ec0d670b11faf",
          "strMeal": "Leblebi Soup",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/x2fw9e1560460636.jpg",
          "idMeal": "52973",
          "price": 382
        },
        {
          "_id": "6205f5db637ec0d670b11fb0",
          "strMeal": "Madeira Cake",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/urtqut1511723591.jpg",
          "idMeal": "52900",
          "price": 78
        },
        {
          "_id": "6205f5db637ec0d670b11fb1",
          "strMeal": "Mbuzi Choma (Roasted Goat)",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/cuio7s1555492979.jpg",
          "idMeal": "52968",
          "price": 454
        },
        {
          "_id": "6205f5db637ec0d670b11fb2",
          "strMeal": "Mediterranean Pasta Salad",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg",
          "idMeal": "52777",
          "price": 231
        },
        {
          "_id": "6205f5db637ec0d670b11fb3",
          "strMeal": "Mince Pies",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/qe8pf51576795532.jpg",
          "idMeal": "52991",
          "price": 228
        },
        {
          "_id": "6205f5db637ec0d670b11fb4",
          "strMeal": "Minced Beef Pie",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/xwutvy1511555540.jpg",
          "idMeal": "52876",
          "price": 272
        },
        {
          "_id": "6205f5db637ec0d670b11fb5",
          "strMeal": "Moroccan Carrot Soup",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/jcr46d1614763831.jpg",
          "idMeal": "53047",
          "price": 346
        },
        {
          "_id": "6205f5db637ec0d670b11fb6",
          "strMeal": "Moussaka",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/ctg8jd1585563097.jpg",
          "idMeal": "53006",
          "price": 278
        },
        {
          "_id": "6205f5db637ec0d670b11fb7",
          "strMeal": "Mulukhiyah",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/x372ug1598733932.jpg",
          "idMeal": "53029",
          "price": 0
        },
        {
          "_id": "6205f5db637ec0d670b11fb8",
          "strMeal": "Mushroom soup with buckwheat",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/1ngcbf1628770793.jpg",
          "idMeal": "53059",
          "price": 435
        },
        {
          "_id": "6205f5db637ec0d670b11fb9",
          "strMeal": "Mustard champ",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/o7p9581608589317.jpg",
          "idMeal": "53038",
          "price": 330
        },
        {
          "_id": "6205f5db637ec0d670b11fba",
          "strMeal": "Nutty Chicken Curry",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/yxsurp1511304301.jpg",
          "idMeal": "52851",
          "price": 184
        },
        {
          "_id": "6205f5db637ec0d670b11fbb",
          "strMeal": "Pancakes",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/rwuyqx1511383174.jpg",
          "idMeal": "52854",
          "price": 214
        },
        {
          "_id": "6205f5db637ec0d670b11fbc",
          "strMeal": "Parkin Cake",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/qxuqtt1511724269.jpg",
          "idMeal": "52902",
          "price": 44
        },
        {
          "_id": "6205f5db637ec0d670b11fbd",
          "strMeal": "Pate Chinois",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/yyrrxr1511816289.jpg",
          "idMeal": "52930",
          "price": 467
        },
        {
          "_id": "6205f5db637ec0d670b11fbe",
          "strMeal": "Peanut Butter Cheesecake",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/qtuuys1511387068.jpg",
          "idMeal": "52861",
          "price": 208
        },
        {
          "_id": "6205f5db637ec0d670b11fbf",
          "strMeal": "Peanut Butter Cookies",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/1544384070.jpg",
          "idMeal": "52958",
          "price": 58
        },
        {
          "_id": "6205f5db637ec0d670b11fc0",
          "strMeal": "Pear Tarte Tatin",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/rxvxrr1511797671.jpg",
          "idMeal": "52916",
          "price": 347
        },
        {
          "_id": "6205f5db637ec0d670b11fc1",
          "strMeal": "Pilchard puttanesca",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/vvtvtr1511180578.jpg",
          "idMeal": "52837",
          "price": 86
        },
        {
          "_id": "6205f5db637ec0d670b11fc2",
          "strMeal": "Polskie Naleśniki (Polish Pancakes)",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/58bkyo1593350017.jpg",
          "idMeal": "53022",
          "price": 155
        },
        {
          "_id": "6205f5db637ec0d670b11fc3",
          "strMeal": "Portuguese barbecued pork (Febras assadas)",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/cybyue1614349443.jpg",
          "idMeal": "53044",
          "price": 395
        },
        {
          "_id": "6205f5db637ec0d670b11fc4",
          "strMeal": "Potato Gratin with Chicken",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/qwrtut1468418027.jpg",
          "idMeal": "52780",
          "price": 319
        },
        {
          "_id": "6205f5db637ec0d670b11fc5",
          "strMeal": "Poutine",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/uuyrrx1487327597.jpg",
          "idMeal": "52804",
          "price": 130
        },
        {
          "_id": "6205f5db637ec0d670b11fc6",
          "strMeal": "Rappie Pie",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/ruwpww1511817242.jpg",
          "idMeal": "52933",
          "price": 45
        },
        {
          "_id": "6205f5db637ec0d670b11fc7",
          "strMeal": "Ratatouille",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/wrpwuu1511786491.jpg",
          "idMeal": "52908",
          "price": 169
        },
        {
          "_id": "6205f5db637ec0d670b11fc8",
          "strMeal": "Rock Cakes",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/tqrrsq1511723764.jpg",
          "idMeal": "52901",
          "price": 10
        },
        {
          "_id": "6205f5db637ec0d670b11fc9",
          "strMeal": "Rocky Road Fudge",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/vtxyxv1483567157.jpg",
          "idMeal": "52786",
          "price": 263
        },
        {
          "_id": "6205f5db637ec0d670b11fca",
          "strMeal": "Rogaliki (Polish Croissant Cookies)",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/7mxnzz1593350801.jpg",
          "idMeal": "53024",
          "price": 82
        },
        {
          "_id": "6205f5db637ec0d670b11fcb",
          "strMeal": "Roti john",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/hx335q1619789561.jpg",
          "idMeal": "53052",
          "price": 190
        },
        {
          "_id": "6205f5db637ec0d670b11fcc",
          "strMeal": "Salmon Avocado Salad",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/1549542994.jpg",
          "idMeal": "52960",
          "price": 388
        },
        {
          "_id": "6205f5db637ec0d670b11fcd",
          "strMeal": "Salmon Eggs Eggs Benedict",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/1550440197.jpg",
          "idMeal": "52962",
          "price": 74
        },
        {
          "_id": "6205f5db637ec0d670b11fce",
          "strMeal": "Seri muka kuih",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/6ut2og1619790195.jpg",
          "idMeal": "53054",
          "price": 166
        },
        {
          "_id": "6205f5db637ec0d670b11fcf",
          "strMeal": "Shakshuka",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/g373701551450225.jpg",
          "idMeal": "52963",
          "price": 433
        },
        {
          "_id": "6205f5db637ec0d670b11fd0",
          "strMeal": "Skillet Apple Pork Chops with Roasted Sweet Potatoes & Zucchini",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/h3ijwo1581013377.jpg",
          "idMeal": "52994",
          "price": 449
        },
        {
          "_id": "6205f5db637ec0d670b11fd1",
          "strMeal": "Sledz w Oleju (Polish Herrings)",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/7ttta31593350374.jpg",
          "idMeal": "53023",
          "price": 46
        },
        {
          "_id": "6205f5db637ec0d670b11fd2",
          "strMeal": "Spaghetti alla Carbonara",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg",
          "idMeal": "52982",
          "price": 441
        },
        {
          "_id": "6205f5db637ec0d670b11fd3",
          "strMeal": "Spanish Tortilla",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/quuxsx1511476154.jpg",
          "idMeal": "52872",
          "price": 199
        },
        {
          "_id": "6205f5db637ec0d670b11fd4",
          "strMeal": "Spicy Arrabiata Penne",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
          "idMeal": "52771",
          "price": 444
        },
        {
          "_id": "6205f5db637ec0d670b11fd5",
          "strMeal": "Split Pea Soup",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/xxtsvx1511814083.jpg",
          "idMeal": "52925",
          "price": 346
        },
        {
          "_id": "6205f5db637ec0d670b11fd6",
          "strMeal": "Spotted Dick",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/xqvyqr1511638875.jpg",
          "idMeal": "52886",
          "price": 33
        },
        {
          "_id": "6205f5db637ec0d670b11fd7",
          "strMeal": "Spring onion and prawn empanadas",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/1c5oso1614347493.jpg",
          "idMeal": "53040",
          "price": 119
        },
        {
          "_id": "6205f5db637ec0d670b11fd8",
          "strMeal": "Squash linguine",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/wxswxy1511452625.jpg",
          "idMeal": "52866",
          "price": 104
        },
        {
          "_id": "6205f5db637ec0d670b11fd9",
          "strMeal": "Stamppot",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/hyarod1565090529.jpg",
          "idMeal": "52980",
          "price": 14
        },
        {
          "_id": "6205f5db637ec0d670b11fda",
          "strMeal": "Stovetop Eggplant With Harissa, Chickpeas, and Cumin Yogurt",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/yqwtvu1487426027.jpg",
          "idMeal": "52817",
          "price": 341
        },
        {
          "_id": "6205f5db637ec0d670b11fdb",
          "strMeal": "Sugar Pie",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/yrstur1511816601.jpg",
          "idMeal": "52931",
          "price": 448
        },
        {
          "_id": "6205f5db637ec0d670b11fdc",
          "strMeal": "Summer Pistou",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/rqtxvr1511792990.jpg",
          "idMeal": "52911",
          "price": 421
        },
        {
          "_id": "6205f5db637ec0d670b11fdd",
          "strMeal": "Summer Pudding",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/rsqwus1511640214.jpg",
          "idMeal": "52889",
          "price": 126
        },
        {
          "_id": "6205f5db637ec0d670b11fde",
          "strMeal": "Sweet and Sour Pork",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/1529442316.jpg",
          "idMeal": "52949",
          "price": 345
        },
        {
          "_id": "6205f5db637ec0d670b11fdf",
          "strMeal": "Tahini Lentils",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/vpxyqt1511464175.jpg",
          "idMeal": "52869",
          "price": 434
        },
        {
          "_id": "6205f5db637ec0d670b11fe0",
          "strMeal": "Tamiya",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/n3xxd91598732796.jpg",
          "idMeal": "53026",
          "price": 152
        },
        {
          "_id": "6205f5db637ec0d670b11fe1",
          "strMeal": "Tarte Tatin",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/ryspuw1511786688.jpg",
          "idMeal": "52909",
          "price": 344
        },
        {
          "_id": "6205f5db637ec0d670b11fe2",
          "strMeal": "Teriyaki Chicken Casserole",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg",
          "idMeal": "52772",
          "price": 290
        },
        {
          "_id": "6205f5db637ec0d670b11fe3",
          "strMeal": "Timbits",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/txsupu1511815755.jpg",
          "idMeal": "52929",
          "price": 166
        },
        {
          "_id": "6205f5db637ec0d670b11fe4",
          "strMeal": "Toad In The Hole",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/ytuvwr1503070420.jpg",
          "idMeal": "52822",
          "price": 328
        },
        {
          "_id": "6205f5db637ec0d670b11fe5",
          "strMeal": "Tonkatsu pork",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/lwsnkl1604181187.jpg",
          "idMeal": "53032",
          "price": 193
        },
        {
          "_id": "6205f5db637ec0d670b11fe6",
          "strMeal": "Treacle Tart",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/wprvrw1511641295.jpg",
          "idMeal": "52892",
          "price": 436
        },
        {
          "_id": "6205f5db637ec0d670b11fe7",
          "strMeal": "Tuna Nicoise",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/yypwwq1511304979.jpg",
          "idMeal": "52852",
          "price": 370
        },
        {
          "_id": "6205f5db637ec0d670b11fe8",
          "strMeal": "Tunisian Orange Cake",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/y4jpgq1560459207.jpg",
          "idMeal": "52970",
          "price": 103
        },
        {
          "_id": "6205f5db637ec0d670b11fe9",
          "strMeal": "Vegan Chocolate Cake",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/qxutws1486978099.jpg",
          "idMeal": "52794",
          "price": 131
        },
        {
          "_id": "6205f5db637ec0d670b11fea",
          "strMeal": "Vegetarian Chilli",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/wqurxy1511453156.jpg",
          "idMeal": "52867",
          "price": 309
        },
        {
          "_id": "6205f5db637ec0d670b11feb",
          "strMeal": "White chocolate creme brulee",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/uryqru1511798039.jpg",
          "idMeal": "52917",
          "price": 304
        },
        {
          "_id": "6205f5db637ec0d670b11fec",
          "strMeal": "Yaki Udon",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/wrustq1511475474.jpg",
          "idMeal": "52871",
          "price": 42
        }
      ]
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
