/**
 * @param {number[]}    nums    the number array
 * @return {boolean}            whether has duplicates or not
 */
const containsDuplicate = function(nums) {
  const set = new Set();
  for (let num of nums) {
    if (set.has(num)) {
      return true;
    }
    set.add(num);
  }
  return false;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0217 - Contains Duplicate:');
  [
    [1, 2, 3, 1],
    [1, 2, 3, 4],
    [1, 1, 1, 3, 3, 4, 3, 2, 4, 2],
  ].forEach( vs => {
    console.log(`  dup=${containsDuplicate(vs)}, nums=[${vs.join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
