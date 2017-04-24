var express = require('express');
var router = express.Router();
const fs = require("fs");

// for (var  i = 0; i < cont.length - 1; i++) {
// 	kaifa.map(function(data){
// 	if(cont[i].indexOf(data) != -1){
//      dir.push(showdir(cont[i]))
// 	}
// 	})
// }

// console.log(dir)

//}
/* GET home page. */
// router.get('/', function(req, res, next) {
// 	var city = fs.readFileSync('F:/pro/city.json', 'utf-8');
//     res.render('index', { user: '',dir:'','city':city});
// });
router.get('/', function(req, res, next) {
        	    res.render('login');
});
module.exports = router;
