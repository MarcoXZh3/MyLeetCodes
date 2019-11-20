/**
 * @param {number}      n       number of nodes in the graph
 * @param {number[][]}  edges   edges of the graph
 * @return {number[]}           root nodes of all the minimum height trees
 */
const findMinHeightTrees = function(n, edges) {
  return [];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0310 - Minimum Height Trees:');
  [
    [4, [[1, 0], [1, 2], [1, 3]]],
    [6, [[0, 3], [1, 3], [2, 3], [4, 3], [5, 4]]],
  ].forEach( vs => {
    console.log(`  n=${vs[0]}; edges=${JSON.stringify(vs[1])}`);
    console.log(`  mht=${JSON.stringify(findMinHeightTrees(vs[0], vs[1]))}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
