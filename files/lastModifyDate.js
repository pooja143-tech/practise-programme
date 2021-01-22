const fs = require('fs');
fs.stat('f3.js', (err, stats) => {
    if(err) {
        throw err;
    }
    console.log(`File Data Last Modified: ${stats.mtime}`);
    console.log(`File Status Last Modified: ${stats.ctime}`);
});