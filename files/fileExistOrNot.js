// const fs = require('fs')

// const path = './f0.js'

// try {
//   if (fs.existsSync(path)) {
//     //file exists
//   }
// } catch(err) {
//   console.error(err)
// }

// const fs = require('fs')

// const path = '../array'

// fs.access(path, fs.F_OK, (err) => {
//   if (err) {
//     console.error(err)
//     return
//   }
// })

const fs = require('fs');

const checkFolder = folderPath => {
  if (!folderPath) throw Error('../files')
  const isFolderExist = fs.existsSync(folderPath);//outputConfusing
  return isFolderExist;
};

console.log(checkFolder('blog')); // True
console.log(checkFolder('sunrises')); // False