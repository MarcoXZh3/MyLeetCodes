/**
 * @param {number}        k     how many numbers required
 * @param {number}        n     the target sum
 * @return {number[][]}         all solutions
 */
const combinationSum3 = function(k, n) {
  return [];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0216 - Combination Sum III:');
  [
    [3, 7],
    [3, 9],
  ].forEach( vs => {
    const ans = combinationSum3(vs[0], vs[1]);
    console.log(`  target=${vs[1]}; n=${vs[0]}`);
    console.log(`  ans=[${ans.map( an=>`[${an.join(',')}]` ).join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
