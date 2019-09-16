/**
 * @param {number[]}    gas     gas stations
 * @param {number[]}    cost    gas consumptions
 * @return {number}             index of the target station
 */
const canCompleteCircuit = function(gas, cost) {
  let totalGas = 0;
  let totalCost = 0;
  let start = 0;
  let tank = 0;
  for (let i = 0; i < gas.length; i++) {
    totalGas += gas[i];
    totalCost += cost[i];
    tank += gas[i] - cost[i];
    if (tank < 0) {
      start = i + 1;
      tank = 0;
    }
  }
  return totalGas < totalCost ? -1 : start;
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
    console.log(`  cost=[${vs[1].join(', ')}], idx=${canCompleteCircuit(vs[0], vs[1])}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
