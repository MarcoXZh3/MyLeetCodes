// const { BinaryTreeNode, array2bintree, printTree } = require('../_utils/tree');
// const TreeNode = BinaryTreeNode;


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
  ].forEach( v => {
    console.log(`  n=${v}, BSTs=${numTrees(v)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
