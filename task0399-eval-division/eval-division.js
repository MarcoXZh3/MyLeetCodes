/**
 * @param {string[][]}    equations     equation strings
 * @param {number[]}      values        value array
 * @param {string[][]}    queries       query strings
 * @return {number[]}                   eval results
 */
const calcEquation = function(equations, values, queries) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0399 - Evaluate Division:');
  [
    [
      [ ['a', 'b'], ['b', 'c'] ],
      [2.0, 3.0],
      [ ['a', 'c'], ['b', 'a'], ['a', 'e'], ['a', 'a'], ['x', 'x'] ],
    ]
  ].forEach( vs => {
    const re = calcEquation(...vs);
    console.log(`  eq=${JSON.stringify(vs[0])}, vals=${JSON.stringify(vs[1])}`);
    console.log(`  qs=${JSON.stringify(vs[2])}, res=${JSON.stringify(re)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
