const objHash = require('object-hash');


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


  /**
   * Print the graph node as string
   * @param {function}    printf  the custom function to print each node
   * @returns {string}            the string representation of the graph
   */
  this.toString = (printf) => {
    return printf ? printf(this) :
                    `${this.val}~[${this.neighbors.map(n=>n.val).join(',')}]`;
  };

};


/**
 * graph
 * @param {GraphNode[]}     nodes     the graph node list
 * @param {GraphNode[][]}   edges     the graph edge list
 * @param {boolean}         directed  whether directed or undirected
 */
const Graph = module.exports.Graph = function(nodes, edges, directed) {
  /**
   * whether directed or undirected
   */
  this.directed = directed || false;
  /**
   * nodes of the graph
   */
  this.nodes = nodes || [];
  this.nodes.forEach( node => node.neighbors = []);
  for (let edge of edges) {
    if (this.nodes.indexOf(edge[0]) < 0) {
      throw new Error(`Unknown Graph Node: ${edge[0].toString()}`);
    } else if (this.nodes.indexOf(edge[1]) < 0) {
      throw new Error(`Unknown Graph Node: ${edge[1].toString()}`);
    }
    edge[0].neighbors.push(edge[1]);
    if (!directed) {
      edge[1].neighbors.push(edge[0]);
    }
  }


  /**
   * Print the graph as string
   * @param {function}    printf  the custom function to print each node
   * @returns {string}            the string representation of the graph
   */
  this.toString = (printf) => {
    return this.nodes.map( n=>n.toString(printf) ).join('\n') || '{EMPTY}';
  };

};


/**
 * create a graph out of an edges array
 * @param {object[]}    arr       the edges array
 * @param {boolean}     directed  whether directed or undirected
 * @param {function}    getVal    the custom function to extract node values from the array
 * @param {function}    hash      the custom function to extract node hashes from the array
 * @returns {Graph}               the new graph
 */
module.exports.edges2Graph = function(arr, directed, getVal, hash) {
  /*
   * the edges array like this represents a graph:
   * [
   *   [val1, val2],        val1 ---- val2
   *   [val1, val4],         |         |
   *   [val2, val3],         |         |
   *   [val4, val3],        val4 ---- val3
   * ]
   */
  const map = {};
  const nodes = [];
  const edges = [];
  for (let edge of (arr || []).filter( e=>e&&e.length>=2 )) {
    const hash0 = hash ? hash(node) : objHash(edge[0]);
    const hash1 = hash ? hash(node) : objHash(edge[1]);
    if (!map[hash0]) {
      map[hash0] = new GraphNode(getVal ? getVal(edge[0]) : edge[0]);
      nodes.push(map[hash0]);
    }
    if (!map[hash1]) {
      map[hash1] = new GraphNode(getVal ? getVal(edge[1]) : edge[1]);
      nodes.push(map[hash1]);
    }
    edges.push([map[hash0], map[hash1]]);
  }
  return new Graph(nodes, edges, directed);
};


/**
 * Print the connectivity of the given node in its graph
 * @param {GraphNode}   entry     the graph node
 * @param {function}    toString  the custom function to print each node
 * @returns {string}              the string representation of the graph
 */
module.exports.printConnectivity = function(entry, toString) {
  if (!entry) {
    try {
      return toString(entry);
    } catch (_) {
      return '{NULL}';
    }
  } else if (entry instanceof Graph) {
    entry = entry.nodes[0];
  }

  const recursion = (node) => {
    map[objHash(node)] = 1;
    lines.push(
      toString ? toString(node)
               : `${node.val}~[${node.neighbors.map(n=>n.val).join(',')}]`
    );
    for (let n of node.neighbors) {
      if (!map[objHash(n)]) {
        recursion(n);
      }
    }
  };

  const lines = [];
  const map = {};
  recursion(entry);
  return lines.join('\n');
};
