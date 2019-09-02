const path = require('path');
const { BinaryTreeNode, array2bintree, printTree } = require(path.resolve('_utils/tree'));
const TreeNode = BinaryTreeNode;


/**
 * @param {TreeNode}  root    root of the binary tree
 * @return {number}           min depth of the tree
 */
const minDepth = function(root) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0111 - Minimum Depth of Binary Tree:');
  [
    [3, 9, 20, null, null, 15, 7],
  ].forEach( vs => {
    const root = array2bintree(vs);
    console.log(printTree(root));
    console.log(`  min=${minDepth(root)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
