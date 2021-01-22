 const fs = require("fs")
 fs.stat("./files operation.js", (err, fileStats) => {
   if (err) {
     console.log(err)
   } else {
     console.log(fileStats)//not in humanreadable format
   }
 })
// const fs = require("fs")

// fs.stat("./f3.js", (err, fileStats) => {
//   if (err) {
//     console.log(err)
//   } else {
//     const result = convertBytes(fileStats.size)
//   }
// })