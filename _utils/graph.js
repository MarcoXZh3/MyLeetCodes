const hash = require('object-hash');


/**
 * graph node
 * @param {object}        val         value of the node
 * @param {GraphNode[]}   neighbors   all the node's neighbor nodes
 */
const GraphNode = module.exports.GraphNode = function(val, neighbors) {
  /**
   * value of the node
   */
  this.val = val;

  /**
   * neighbors of the node
   */
  this.neighbors = neighbors || [];
};


/**
 * create a graph out of an indexed array
 * @param {object[]}    arr     the indexed array
 * @returns {GraphNode}         the entry node of the graph
 */
module.exports.idxArray2Graph = function(arr) {
  /*
   * the indexed array like this represents a graph:
   * [
   *   [val1, [1, 3]],  // idx = 0      >>> val1(idx=0) ---- val2(idx=1)
   *   [val2, [0, 2]],  // idx = 1              |                |
   *   [val3, [1, 3]],  // idx = 2              |                |
   *   [val4, [0, 2]],  // idx = 3          val4(idx=3) ---- val3(idx=2)
   * ]
   * and the entry node will be the 1st element of the indexed array
   */
  if (!arr || arr.length === 0) {
    return null;
  }

  // create node by DFS
  const nodes = {};
  for (let i = 0; i < arr.length; i++) {
    const key = `${i}`;
    if (!nodes[key]) {
      nodes[key] = new GraphNode(arr[i][0]);
    }
    for (let j of arr[i][1]) {
      const key2 = `${j}`;
      if (!nodes[key2]) {
        nodes[key2] = new GraphNode(arr[j][0]);
      }
      nodes[key].neighbors.push(nodes[key2]);
    }
  }
  return nodes[`0`];
};


/**
 * Print the graph as string
 * @param {GraphNode}   entry     entry node of the graph
 * @param {function}    toString  the custom function to print each node
 * @returns {string}              the string representation of the graph
 */
module.exports.printGraph = function(entry, toString) {
  const recursion = (node) => {
    map[hash(node)] = 1;
    lines.push(
      toString ? toString(node)
               : `${node.val}~[${node.neighbors.map(n=>n.val).join(',')}]`
    );
    for (let n of node.neighbors) {
      if (!map[hash(n)]) {
        recursion(n);
      }
    }
  };

  if (!entry) {
    try {
      return toString(entry);
    } catch (_) {
      return '{NULL}';
    }
  }
  const lines = [];
  const map = {};
  recursion(entry);
  return lines.join('\n');
};
