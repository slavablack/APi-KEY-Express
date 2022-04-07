var express = require("express");
var router = express.Router();
const axios = require("axios");
const app = express();
const favicon = require("serve-favicon");

const url = "http://universities.hipolabs.com/search?country=";

const getUniversities = async (country) => {
  try {
    const response = await axios.get(url + country);
    // console.log(response);
    return response.data;
  } catch (err) {
    throw err;
  }
};

// const SearchBar = unis.filter((e) => {
//   if (value === e.name) {
//     return unis[value];
//   } else {
//     alert("wrong country");
//   }
// });

/* GET home page. */
router.get("/", async (req, res) => {
  console.log(req.params.country);
  try {
    const unis = await getUniversities(
      req.query.country
      // req.query.web_pages
    );
    res.render("index", {
      title: "Choose your best Uni",
      university: unis[0],
      Unis: unis,
    });
    // console.log(req);
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
});

module.exports = router;
