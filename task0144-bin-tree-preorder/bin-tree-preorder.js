const path = require('path');
const { BinaryTreeNode, array2bintree, printTree } = require(path.resolve('_utils/tree'));
const TreeNode = BinaryTreeNode;


/**
 * @param {TreeNode}    root    root node of the binary tree
 * @return {number[]}           the traversal results
 */
const preorderTraversal = function(root) {
  return [];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0144 - Binary Tree Preorder Traversal:');
  [
    [1, null, 2, null, null, 3],
  ].forEach( vs => {
    const root = array2bintree(vs);
    console.log(`pre=[${preorderTraversal(root).join(', ')}]`);
    console.log(printTree(root));
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
