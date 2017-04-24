var express = require('express');
var router = express.Router();
var fs = require("fs");
var path = require('path');
//var city = JSON.parse(fs.readFileSync(path.join(__dirname + '/../'+ 'city.json'), 'utf-8'));

router.get('/', function(req, res, next) {
    var city = fs.readdirSync("/home/wwwroot");
    var user = req.session.user;
    res.render('ftp',{ user: user,city:city});
});
module.exports = router;

