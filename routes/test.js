var fs = require("fs");
if(fs.existsSync('/home/wwwroot/beijing/phpcms/templates/area/content/')){
console.log('yes');
}else{
console.log('no');
}
