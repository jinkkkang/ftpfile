var express = require('express');
var router = express.Router();
var fs = require("fs");
var path = require('path');
const exec = require('child_process').exec;

function make(data){
	if(data.charAt(data.length-1) == "*"){
		return data.replace(/\*/g,"");
	}else{
		return data;
	}
}


router.get('/', function(req, res, next) {
	var file = req.query.file.split('\n');
	var city = req.query.ncity;
        console.log("WWWWWWWWWWW" + file.length * city.length);
	for (var i = 0; i < city.length; i++) {
                var count = 0;
		file.map(function(data){
                        console.log(make(data));
			if(fs.existsSync(make(data))){
			console.log('cp -arf  ' + data + '  /home/wwwroot/' + city[i] + make(data).replace(/\/home\/wwwroot\/[a-z]+/g,""));
			 exec('cp -arf   ' + data + '   /home/wwwroot/' + city[i] + make(data).replace(/\/home\/wwwroot\/[a-z]+/g,""), (error, stdout, stderr) => {
			if (error) {
			console.error(`exec error: ${error}`);
			res.json({'sta':'err','con':error});
			return;
			 }else{
                         count++;
                         console.log("AAABBB" + count);
                                 if( count == file.length * city.length ){
			        res.json({'sta':'yes'});
			        }
                         }
			});
		       }else{
			 res.json({'sta':'not','con':data});
			}

		})
   }
})
module.exports = router;

