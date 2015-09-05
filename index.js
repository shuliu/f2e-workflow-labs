
var lodash = require('lodash');
var output = lodash.without([1, 2, 3, 4, 5], 1);

console.log(output);
// [CLi] $ node index.js
// -> [2, 3, 4, 5]
