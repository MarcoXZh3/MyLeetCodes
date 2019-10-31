const path = require('path');
const { BinaryTreeNode, arrToBinTree } = require(path.resolve('_utils/binary-tree'));
const TreeNode = BinaryTreeNode;


/**
 * @param {TreeNode}    root    root node of the binary tree
 * @return {string[]}           all the paths
 */
const binaryTreePaths = function(root) {
  return [];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0257 - Binary Tree Paths:');
  [
    [1, 2, 3, null, 5],
  ].forEach( vs => {
    const tree = arrToBinTree(vs);
    console.log(tree.toString());
    console.log(`  paths=[${binaryTreePaths(tree.root).join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
