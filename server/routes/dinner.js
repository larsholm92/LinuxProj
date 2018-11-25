var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const Headline = "Saturday"
  const menuItems = [
    "Lasagna", "Salad"
  ]
  res.render('dinner', {
     Headline: Headline, menuItems: menuItems
  } );
});

module.exports = router;
