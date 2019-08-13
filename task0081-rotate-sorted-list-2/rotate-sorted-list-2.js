/**
 * @param {number[]}  nums      the rotated sorted array
 * @param {number}    target    the target value to search
 * @return {boolean}            whether found or not
 */
const search = function(nums, target) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0081 - Search in Rotated Sorted Array II:');
  [
    [[2, 5, 6, 0, 0, 1, 2], 0],
    [[2, 5, 6, 0, 0, 1, 2], 3],
  ].forEach( vs => {
    console.log(`  found=${search(vs[0], vs[1])}, target=${vs[1]}, nums=[${vs[0].join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
