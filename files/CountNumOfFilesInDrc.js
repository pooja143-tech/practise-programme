const fs = require('fs');
const dir = '../function';  //complex

fs.readdir(dir, (err, files) => {
  console.log(files.length);
});