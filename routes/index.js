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

//get natural simulation
router.get('/natsim', function(req, res) {
  res.render('natsim/natsim');
});

router.get('/natsim/walker', function(req, res) {
  res.render('natsim/walker');
});

//get crap
router.get('/crap', function(req, res) {
  res.render('crap');
});

module.exports = router;
