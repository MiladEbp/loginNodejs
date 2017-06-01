var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

// /* GET home page. */
 //router.get('/', function(req, res, next) {
 // res.render('index', { title: 'Express' });
//});


router.get('/login', function (req, res) {
    res.render('login',{
        title:'login'
    });
});

router.post('/wel',function (req, res) {
    res.render('wel', {
      username: req.body.username,
       password:req.body.password
    });
});

router.post('/login',function(req, res){
     res.redirect('login');
});




module.exports = router;
