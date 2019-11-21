/**
 * @param {number}      n       number of nodes in the graph
 * @param {number[][]}  edges   edges of the graph
 * @return {number[]}           root nodes of all the minimum height trees
 */
const findMinHeightTrees = function(n, edges) {
  if (n === 1) {
    return [0];
  }
  const neighbors = [...Array(n).keys()].map( _=>new Set() );
  for (let edge of edges) {
    neighbors[edge[0]].add(edge[1]);
    neighbors[edge[1]].add(edge[0]);
  }
  let leaves = neighbors.map( (e,i)=>e.size===1?i:null ).filter( x=>x!==null );
  while (n > 2) {
    n -= leaves.length;
    const leaves2 = [];
    for (let i of leaves) {
      const j = neighbors[i].values().next().value;
      neighbors[j].delete(i);
      if (neighbors[j].size === 1) {
        leaves2.push(j);
      }
    }
    leaves = leaves2;
  }
  return leaves;
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
    [6, [[0, 1], [0, 2], [0, 3], [3, 4], [4, 5]]],
  ].forEach( vs => {
    console.log(`  n=${vs[0]}; edges=${JSON.stringify(vs[1])}`);
    console.log(`  mht=${JSON.stringify(findMinHeightTrees(vs[0], vs[1]))}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
