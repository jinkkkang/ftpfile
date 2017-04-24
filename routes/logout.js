var express = require('express');
var router = express.Router();
const fs = require("fs");

router.get('/', function(req, res, next) {
                   req.session.user = null;
        	   res.redirect('/');
});
module.exports = router;
