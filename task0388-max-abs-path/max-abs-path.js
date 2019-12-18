/**
 * @param {string}    input   the formatted paths
 * @return {number}           length of the max absolution path
 */
const lengthLongestPath = function(input) {

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
      '    subdir1',
      '    subdir2',
      '        file.ext',
    ].join('\n'),
    [
      'dir',
      '    subdir1',
      '        file1.ext',
      '        subsubdir1',
      '    subdir2',
      '        subsubdir2',
      '            file2.ext',
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
