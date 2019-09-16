/**
 * @param {number[]}    gas     gas stations
 * @param {number[]}    cost    gas consumptions
 * @return {number}             index of the target station
 */
const canCompleteCircuit = function(gas, cost) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0134 - Gas Station:');
  [
    [ [1, 2, 3, 4, 5], [3, 4, 5, 1, 2] ],
    [ [2, 3, 4], [3, 4, 3] ],
  ].forEach( vs => {
    console.log(`   gas=[${vs[0].join(', ')}]`)
    console.log(`  cost=[${vs[1].join(', ')}], idx=${canCompleteCircuit((vs[0], vs[1]))}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
