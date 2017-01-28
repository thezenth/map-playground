var express = require('express');
var router = express.Router();

router.use('/offline.manifest', require('./manifest.js'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
