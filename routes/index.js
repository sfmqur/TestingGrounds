var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Testing Grounds' });
});

//get threejs
router.get('/threejs', function(req, res) {
  res.render('threejs/threejs');
});

router.get('/threejs/firstcube', function(req, res) {
  res.render('threejs/firstcube');
});

//get natural simulation
router.get('/natsim', function(req, res) {
  res.render('natsim/natsim');
});

router.get('/natsim/walker', function(req, res) {
  res.render('natsim/walker');
});

router.get('/natsim/normdist', function(req, res) {
  res.render('natsim/normdist');
});

//get crap
router.get('/crap', function(req, res) {
  res.render('crap');
});

module.exports = router;
