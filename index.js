const path = require('path');


console.log('https://github.com/MarcoXZh3/MyLeetCodes.git');
console.log('https://leetcode.com/problemset/algorithms/');
console.log();


// require(path.resolve('_utils/sorting')).main();


require('child_process').exec(`sh ${path.resolve('task0193-valid-num/valid-num.sh')}`,
                              (err, stdout, stderr) => {
  if (err) {
    return console.error(err.message);
  }
  if (stdout) {
    console.log(stdout);
  }
  if (stderr) {
    console.error(stderr);
  }
});
