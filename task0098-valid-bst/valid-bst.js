const { BinaryTreeNode, array2bintree, printTree } = require('../_utils/tree');
const TreeNode = BinaryTreeNode;


/**
 * @param {TreeNode}    root    root of the binary tree
 * @return {boolean}            whether the binary tree is a binary search tree
 */
const isValidBST = function(root) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0098 - Validate Binary Search Tree:');
  [
    [2, 1, 3],
    [5, 1, 4, null, null, 3, 6],
  ].forEach( vs => {
    const root = array2bintree(vs);
    console.log(`valid=${isValidBST(root)}`);
    console.log(printTree(root));
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
