const path = require('path');
const { GraphNode, idxArray2Graph, printGraph } = require(path.resolve('_utils/graph'));
const Node = GraphNode;


/**
 * DFS
 * @param {Node}    node    entry node of the graph
 * @return {Node}           the cloned graph's entry node
 */
const cloneGraph = function(node) {
  const recursion = (node) => {
    const key = `${node.val}`;
    if (clones[key]) {
      return clones[key];
    }
    clones[key] = new Node(node.val, []);
    for (let n of node.neighbors) {
      clones[key].neighbors.push(recursion(n));
    }
    return clones[key];
  };

  if (!node) {
    return null;
  }
  const clones = {};
  return recursion(node);
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0133 - Clone Graph:');
  [
    [ [1, [1,3]], [2, [0,2]], [3, [1,3]], [4, [0,2]] ],
  ].forEach( vs => {
    const entry = idxArray2Graph(vs);
    const lines0 = printGraph(entry).split('\n');
    const cp = cloneGraph(entry);
    const lines1 = printGraph(cp).split('\n');
    for (let i = 0; i < lines0.length; i++) {
      console.log(`  ${lines0[i]}     ${lines1[i] || ''}`);
    }
    let s = '';
    while (s.length < (lines0[0] || '').length) {
      s += ' ';
    }
    for (let i = lines0.length; i < lines1.length; i++) {
      console.log(`  ${s}     ${lines1[i] || ''}`);
    }
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
