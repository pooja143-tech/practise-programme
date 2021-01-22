const fs = require('fs');
fs.copyFile('f2-CopyOneFileToAnother.js', 'f2-copiedFile.txt', (err) => {
  if (err) throw err;
  console.log('f2-CopyOneFileToAnother.js was copied to f2-copiedFile.txt');
});