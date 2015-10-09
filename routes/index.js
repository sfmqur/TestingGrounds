var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Testing Grounds' });
});

//get threejstest
router.get('/threejstest', function(req, res) {
  res.render('threejstest');
});


module.exports = router;
