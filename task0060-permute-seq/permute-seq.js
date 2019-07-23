/**
 * @param {number}    n   number of digits
 * @param {number}    k   the kth permutation
 * @return {string}       the string version of the kth permutation
 */
const getPermutation = function(n, k) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0060 - Permutation Sequence:');
  [
    [3, 3],
    [4, 9],
  ].forEach( vs => {
    console.log(` n=${vs[0]}, k=${vs[1]}, re=${getPermutation(vs[0], vs[1])}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
