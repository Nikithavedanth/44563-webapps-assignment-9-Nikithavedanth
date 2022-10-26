var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var nikki1=Math.floor(Math.random()*30);
    var nikki2=Math.floor(Math.random()*15);
    var nikitha1=Math.log(nikki1);
    var nikitha2=Math.imul(nikki1,nikki2);
    var nikitha3=Math.log10(nikki1);

  res.render('computation', { title: 'Nikitha Vedant Madabhushi Bonus',
title1:'Random Absolute Input value',nikki1:nikki1,
title2:'Random Absolute Input value',nikki2:nikki2 ,
nikitha1:nikitha1, nikitha2:nikitha2 ,nikitha3:nikitha3 });
});

module.exports = router;
