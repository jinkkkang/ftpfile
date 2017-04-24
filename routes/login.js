var express = require('express');
var router = express.Router();
var fs = require("fs");
var path = require('path');

router.post('/', function(req, res, next) {
     var username = req.body.username;
     var city = JSON.parse(fs.readFileSync(path.join(__dirname + '/../'+ 'city.json'), 'utf-8'));
     //var city = fs.readdirSync("/home/wwwroot");
     req.session.user = username; 
    // req.session.city = city[username];
     //res.render('index',{ user: username,city:city[username]});
     res.render('index',{ user: username});

});
module.exports = router;
