var express = require('express');
var router = express.Router();
const fs = require("fs");
const exec = require('child_process').exec;
var dir;
var da=[];

//获取开发姓名
function kai(con){
  return con.split(":")[0];
}

//获取开发目录
function showdir(con){
  return (con.split(":")[5]).split("/")[3];
}
/* GET users listing. */
router.get('/', function(req, res, next) {
    var user = req.query.user;
    var city = req.query.ncity;
    exec('usermod  -d /home/wwwroot/' + city + ' ' + user, (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
   var connt = fs.readFileSync('/etc/passwd', 'utf-8').split('\n');
connt.map(function(data){
        if(data.indexOf(user) != -1 && data.indexOf(city) != -1){
      res.json({'sta':'yes'})
    }
        if(data.indexOf(user) != -1 && data.indexOf(city) == -1){
      res.json({'sta':'no'})
    }
})
});

           

    
});

module.exports = router;
