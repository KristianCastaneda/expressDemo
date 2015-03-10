var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "expressDemo", firstHeadline: "Here's my first headline" });
});

module.exports = router;
