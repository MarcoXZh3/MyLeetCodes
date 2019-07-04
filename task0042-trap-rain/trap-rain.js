/**
 * @param {number[]}  heights     the height list
 * @return {number}               the rain water these height can trap
 */
const trap = function(heights) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0042 - Trapping Rain Water:');
  [
    [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1],
  ].forEach( vs => {
    console.log(`  trap=${trap(vs)}; heights=[${vs.join(',')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
