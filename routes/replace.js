var express = require('express');
var router = express.Router();
var fs = require("fs");
var path = require('path');
var city = JSON.parse(fs.readFileSync(path.join(__dirname + '/../'+ 'city.json'), 'utf-8'));

router.get('/', function(req, res, next) {
    if(!req.session.user){
	res.redirect('/')
   }
    var user = req.session.user;
    res.render('file',{user:user,city:city[user]});
});
module.exports = router;
