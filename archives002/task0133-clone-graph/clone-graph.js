const path = require('path');
const { GraphNode, edges2Graph, printConnectivity } = require(path.resolve('_utils/graph'));
const Node = GraphNode;


/**
 * DFS by recursion
 * @param {Node}    node    entry node of the graph
 * @return {Node}           the cloned graph's entry node
 */
const cloneGraph0 = function(node) {
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
 * BFS by queue/stack
 * @param {Node}    node    entry node of the graph
 * @return {Node}           the cloned graph's entry node
 */
const cloneGraph = function(node) {
  if (!node) {
    return null;
  }

  const clones = {};
  clones[`${node.val}`] = new Node(node.val, []);
  const queue = [node];
  while (queue.length > 0) {
    const cur = queue.shift();
    const key = `${cur.val}`;
    if (!clones[key]) {
      clones[key] = new Node(cur.val, []);
    }
    for (let n of cur.neighbors) {
      const key2 = `${n.val}`;
      if (!clones[key2]) {
        queue.push(n);
        clones[key2] = new Node(n.val, []);
      }
      clones[key].neighbors.push(clones[key2]);
    }
  }
  return clones[`${node.val}`];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0133 - Clone Graph:');
  [
    [ [1, 2], [1, 4], [2, 3], [3, 4] ],
  ].forEach( vs => {
    const graph0 = edges2Graph(vs);
    const lines0 = printConnectivity(graph0.nodes[0]).split('\n');
    const entry1 = cloneGraph(graph0.nodes[0]);
    const lines1 = printConnectivity(entry1).toString().split('\n');
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
