var express = require('express');
var router = express.Router();
var url = require('url');

/* GET home page. */
router.get('/', function(req, res, next) {
  let a = Number(url.parse(req.url, true).query.a) || 0;
  let b = Number(url.parse(req.url, true).query.b) || 0;
  if (typeof(a) != "number") a = 0;
  if (typeof(b) != "number") b = 0;
  res.render('index', { sum: a + b });
  console.log(a + b);
});

module.exports = router;
