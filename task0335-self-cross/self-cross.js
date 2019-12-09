/**
 * @param {number[]}      x       the steps to go
 * @return {boolean}              whether cross self or not
 */
const isSelfCrossing = function(x) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0335 - Self Crossing:');
  [
    [2, 1, 1, 2],
    [1, 2, 3, 4],
    [1, 1, 1, 1],
  ].forEach( vs => {
    console.log(`  cross=${isSelfCrossing(vs)}, steps=${JSON.stringify(vs)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
