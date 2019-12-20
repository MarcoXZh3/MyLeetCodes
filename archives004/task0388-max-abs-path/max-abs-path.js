/**
 * @param {string}    input   the formatted paths
 * @return {number}           length of the max absolute path
 */
const lengthLongestPath = function(input) {
  const stack = [0];
  let max = 0;
  for (let line of input.split('\n')) {
    const level = line.lastIndexOf('\t') + 1;
    while (level + 1 < stack.length) {
      stack.pop();
    }
    const len = stack[stack.length - 1] + line.length - level + 1;
    stack.push(len);
    if (line.includes('.')) {
      max = Math.max(max, len - 1);
    }
  }
  return max;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0388 - Longest Absolute File Path:');
  [
    [
      'dir',
      '\tsubdir1',
      '\tsubdir2',
      '\t\tfile.ext',
    ].join('\n'),
    [
      'dir',
      '\tsubdir1',
      '\t\tfile1.ext',
      '\t\tsubsubdir1',
      '\tsubdir2',
      '\t\tsubsubdir2',
      '\t\t\tfile2.ext',
    ].join('\n'),
  ].forEach( v => {
    v.split('\n').forEach(line => {
      console.log(`  >${line}`);
    });
    console.log(`  max=${lengthLongestPath(v)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
