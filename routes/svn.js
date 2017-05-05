var express = require('express');
var router = express.Router();
const fs = require("fs");
router.get('/', function(req, res, next) {
    if(!req.session.user){
	res.redirect('/')	
    }
       res.render('svn');
});
module.exports = router;
