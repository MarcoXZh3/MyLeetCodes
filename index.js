const path = require('path');
const spawn = require("child_process").spawn;   // for executing Python scripts


const python = path.resolve('.venv/bin/python');

console.log('https://github.com/MarcoXZh3/MyLeetCodes.git');
console.log('https://leetcode.com/problemset/algorithms/');
console.log();


// require(path.resolve('_utils/sorting')).main();


spawn(
  python, [path.resolve('task0374-guess-number/guess-number.py')],
).stdout.on('data', (data) => {
  console.log(data.toString().trim());
});
