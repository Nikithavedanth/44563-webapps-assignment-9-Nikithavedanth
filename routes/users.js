var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var times=0;

  res.send('user access are:'+times);
  times=times+1;

});

module.exports = router;
