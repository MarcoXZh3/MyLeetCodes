const path = require('path');
const { BinaryTreeNode, array2bintree, printTree } = require(path.resolve('_utils/tree'));
const TreeNode = BinaryTreeNode;


/**
 * @param {TreeNode}    root    root of the binary tree
 * @return {number}             the sum from root to all leaves
 */
const sumNumbers = function(root) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0129 - Sum Root to Leaf Numbers:');
  [
    [1, 2, 3],
    [4, 9, 0, 5, 1],
  ].forEach( vs => {
    const root = array2bintree(vs);
    console.log(printTree(root));
    console.log(`  sum=${sumNumbers(root)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
