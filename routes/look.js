var express = require('express');
var router = express.Router();
const fs = require("fs");
var dir;

//获取开发目录
function showdir(con){
  return (con.split(":")[5]).split("/")[3];
}
/* GET users listing. */
router.get('/', function(req, res, next) {
    var user = req.query.user;
    console.log(user);
    var cont = fs.readFileSync('/etc/passwd', 'utf-8').split('\n');
    cont.map(function(data){
    	if(data.indexOf(user) != -1){
    	  dir = showdir(data)
          console.log(dir);
          res.json({'sta':'yes','dir':dir})
    	}
    })
           

    
});

module.exports = router;
