var file=require('fs');
file.writeFileSync("./demo.txt","kiran123");
//file.appendFileSync("./demo.txt","mahe0809");
var data=file.readFileSync('./demo.txt',{encoding:'utf-8'});
console.log(data.toString());