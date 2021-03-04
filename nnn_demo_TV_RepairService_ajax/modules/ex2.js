const _ = require("lodash")

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let c1 = _.chunk(nums, 2);
console.log(c1);

let c2 = _.chunk(nums, 3);
console.log(c2)