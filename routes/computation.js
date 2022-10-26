var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var nikki1=Math.floor(Math.random()*30);
    var nikki2=Math.random()*30;
    var nikki3=Math.random()*10;
    var nikki4=Math.random(Math.random()*10);
    var nikitha1=Math.log(nikki1);
    var nikitha2=Math.log(nikki2);
    var nikitha3=Math.imul(nikki3);
    var nikitha4=Math.imul(nikki4);
    var nikitha5=Math.log10(nikki1);
    var nikitha6=Math.log10(nikki2);

  res.render('computation', { title: 'Nikitha Vedant Madabhushi Bonus',title1:'Random Absolute Input value',nikki1:nikki1,title2:'Random Float Input Value',nikki2:nikki2, title3:'Random float input value between 0-1 ',nikki3:nikki3,title4:'Random absolute input value between 0-1',nikki4:nikki4 ,nikitha1:nikitha1, nikitha2:nikitha2 ,nikitha3:nikitha3 ,nikitha4:nikitha4 ,nikitha5:nikitha5,nikitha6:nikitha6 });
});

module.exports = router;
