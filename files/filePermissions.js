const fs = require("fs");
const file = "./newfile.txt";
fs.chmodSync(file,0o666);
console.log("File permission changed");