const path = require('path');
const { BinaryTreeNode, array2bintree, printTree } = require(path.resolve('_utils/tree'));
const TreeNode = BinaryTreeNode;


/**
 * @param {TreeNode}    root    root of the binary tree
 * @return {boolean}            whether the tree is balanced or not
 */
const isBalanced = function(root) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0110 - Balanced Binary Tree:');
  [
    [3, 9, 20, null, null, 15, 7],
    [1, 2, 2, 3, 3, null, null, 4, 4],
  ].forEach( vs => {
    const root = array2bintree(vs);
    console.log(`  balanced=${isBalanced(root)}`);
    console.log(printTree(root));
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
