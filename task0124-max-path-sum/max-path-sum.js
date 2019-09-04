const path = require('path');
const { BinaryTreeNode, array2bintree, printTree } = require(path.resolve('_utils/tree'));
const TreeNode = BinaryTreeNode;


/**
 * @param {TreeNode}    root    root node of the binary tree
 * @return {number}             the max path sum
 */
const maxPathSum = function(root) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0124 - Binary Tree Maximum Path Sum:');
  [
    [1, 2, 3],
    [-10, 9, 20, null, null, 15, 7],
  ].forEach( vs => {
    const root = array2bintree(vs);
    console.log(printTree(root));
    console.log(`  max=${maxPathSum(root)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
