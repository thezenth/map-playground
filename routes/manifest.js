var express = require('express');
var router = express.Router();

var path = require('path');

router.get("/", function(req, res){
  res.header("Content-Type", "text/cache-manifest");
  //console.log(path.resolve('./cache.manifest'));
  res.sendFile(path.resolve('./cache.manifest'));
});

module.exports = router;
