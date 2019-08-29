const path = require('path');
const { BinaryTreeNode, array2bintree, printTree } = require(path.resolve('_utils/tree'));
const TreeNode = BinaryTreeNode;


/**
 * @param {TreeNode}  root    root of the binary tree
 * @return {number}           max depth of the tree
 */
const maxDepth = function(root) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0104 - Maximum Depth of Binary Tree:');
  [
    [3, 9, 20, null, null, 15, 7],
  ].forEach( vs => {
    const root = array2bintree(vs);
    console.log(printTree(root));
    console.log(`  max=${maxDepth(root)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
