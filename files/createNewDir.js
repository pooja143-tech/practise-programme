
var fs = require('fs');
var dir = '/../pooja';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
    console.log("dir created")
}