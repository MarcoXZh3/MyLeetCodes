/**
 * @param {string}        s     the string to partition
 * @return {string[][]}         the partition results
 */
const partition = function(s) {
  return [];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0131 - Palindrome Partitioning:');
  [
    'aab',
  ].forEach( v => {
    console.log(`  str="${v}"`);
    const strs = partition(v);
    for (let i = 0; i < strs.length; i++) {
      console.log(`  ${i+1}/${strs.length}: [${strs[i].map( s=>`"${s}"`).join(', ')}]`);
    }
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
