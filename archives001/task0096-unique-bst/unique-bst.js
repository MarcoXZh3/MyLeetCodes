// const path = require('path');
// const { BinaryTreeNode, array2bintree, printTree } = require(path.resolve('_utils/tree'));
// const TreeNode = BinaryTreeNode;


/**
 * recursion: count every case
 * @param {number}      n   number of nodes
 * @return {number}         how many BSTs to hold these many nodes
 */
const numTrees0 = function(n) {
  /**
   * @param {number}  start   the smallest value of all the BST nodes
   * @param {number}  end     the largest value of all the BST nodes
   * @returns {number}        how many BSTs to hold these nodes
   */
  const recursion = (start, end) => {
    if (start > end) {
      return 1;
    }
    let res = 0;
    for (let i = start; i <= end; i++) {
      res += recursion(1, i - start) * recursion(i + 1, end);
    }
    return res;
  };
  return recursion(1, n);
};


/**
 * dynamic programming: F(n) = SUM(F(i - 1) * F(n - i)) where i = 1, ..., n
 * @param {number}      n   number of nodes
 * @return {number}         how many BSTs to hold these many nodes
 */
const numTrees = function(n) {
  const dp = Array(n + 1).fill(0);
  dp[0] = 1;                          // an empty tree with 0 nodes has 1 result
  for (let i = 1; i <= n; i++) {      // a tree with i nodes
    dp[i] = 0;
    for (let j = 1; j <= i; j++) {    // when j as the root
      dp[i] += dp[j - 1] * dp[i - j]; // the left sub tree has j - 1 nodes
    }                                 // the right sub tree has i - j nodes
  }
  return dp[n];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0096 - Unique Binary Search Trees:');
  [
    3,
    4,
    17,
  ].forEach( v => {
    console.log(`  n=${v}, BSTs=${numTrees(v)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
