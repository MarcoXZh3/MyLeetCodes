const path = require('path');
const { BinaryTreeNode, array2bintree, printTree } = require(path.resolve('_utils/tree'));
const TreeNode = BinaryTreeNode;


/**
 * @param {TreeNode}    root    root node of the binary tree
 * @return {number[]}           the traversal results
 */
const rightSideView = function(root) {
  return [];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0199 - Binary Tree Right Side View:');
  [
    [1, null, 2, null, null, 3],
  ].forEach( vs => {
    const root = array2bintree(vs);
    console.log(`right=[${rightSideView(root).join(', ')}]`);
    console.log(printTree(root));
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
