const path = require('path');
const spawn = require("child_process").spawn;   // for executing Python scripts


const python = path.resolve('.venv/bin/python');

console.log('https://github.com/MarcoXZh3/MyLeetCodes.git');
console.log('https://leetcode.com/problemset/algorithms/');
console.log();


// require(path.resolve('_utils/sorting')).main();


require(path.resolve('task0414-3rd-max-num/3rd-max-num.js'))( () => {
});
