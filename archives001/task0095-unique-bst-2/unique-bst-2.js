const path = require('path');
const { BinaryTreeNode, BinaryTree } = require(path.resolve('_utils/trees/binary-tree'));
const TreeNode = BinaryTreeNode;


/**
 * recursion: try every permutation of these BSTs
 * @param {number}        n     number of nodes the BSTs have
 * @return {TreeNode[]}         the list of BSTs holding the nodes
 */
const generateTrees0 = function(n) {
  /**
   * @param {number} start  the smallest value of all the nodes
   * @param {number} end    the largest value of all the nodes
   * @returns {TreeNode[]}  all the BSTs holding these nodes
   */
  const recursion = (start, end) => {
    if (start > end) {  // no values available, return a list with the empty tree
      return [null];
    }
    const res = [];
    for (let i = start; i <= end; i++) {    // each number could be the root value
      const lefts = recursion(start, i - 1);  // all smaller values go left sub
      const rights = recursion(i + 1, end);   // all larger values go right sub
      for (let j = 0; j < (lefts).length; j++) {
        for (let k = 0; k < rights.length; k++) {
          const root = new TreeNode(i);
          root.left = lefts[j];
          root.right = rights[k];
          res.push(root);
        }
      }
    }
    return res;
  };

  // BSTs with nodes value from 1 to n
  return n === 0 ? [] : recursion(1, n);
};


/**
 * dynamic programming
 * @param {number}        n     number of nodes the BSTs have
 * @return {TreeNode[]}         the list of BSTs holding the nodes
 */
const generateTrees = function(n) {
  /**
   * clone the tree
   * @param {TreeNode}  root    root node of the tree
   * @param {number}    offset  new value for the cloned tree
   */
  const clone = (root, offset) => {
    if (!root) {
      return null;
    }
    const node = new TreeNode(root.val + offset);
    node.left = clone(root.left, offset);
    node.right = clone(root.right, offset);
    return node;
  };

  const dp = [...Array(n + 1).keys()].map( _=>[] );
  if (n === 0) {
    return dp[0];
  }
  dp[0].push(null);     // only 1 empty tree available when n = 0
  for (let i = 1; i <= n; i++) {    // i is the root
    for (let j = 0; j < i; j++) {   // j is the left child of i
      for (let left of dp[j]) {
        for (let right of dp[i - j - 1]) {  // i - j - 1 is the right child of i
          const root = new TreeNode(j + 1);
          root.left = left;
          root.right = clone(right, j + 1);
          dp[i].push(root);
        }
      }
    }
  }
  return dp[n];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0095 - Unique Binary Search Trees II:');
  [
    3,
  ].forEach( v => {
    const trees = generateTrees(v);
    console.log(`  n=${v}, BSTs=${trees.length}`);
    trees.forEach( (root, i, arr) => {
      console.log(`  ${i+1}/${arr.length}`);
      console.log(new BinaryTree(root).toString());
    })
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
