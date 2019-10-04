const path = require('path');


console.log('https://github.com/MarcoXZh3/MyLeetCodes.git');
console.log('https://leetcode.com/problemset/algorithms/');
console.log();


// require(path.resolve('_utils/sorting')).main();


console.log(
  require('fs').readFileSync(path.resolve('task0181-employess-earn/employee-earn.sql')).toString()
);
