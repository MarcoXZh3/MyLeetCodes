const path = require('path');
const { BinaryTreeNode, arrToBinTree } = require(path.resolve('_utils/binary-tree'));
const TreeNode = BinaryTreeNode;


/**
 * @param {TreeNode}    root    root node of the complete binary tree
 * @return {number}             number of nodes
 */
const countNodes = function(root) {
  const recursion = (node) => {
    return node ? 1 + recursion(node.left) + recursion(node.right) : 0;
  }
  return recursion(root);
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0222 - Count Complete Tree Nodes:');
  [
    [1, 2, 3, 4, 5, 6],
  ].forEach( vs => {
    const tree = arrToBinTree(vs);
    console.log(tree.toString());
    console.log(`  total=${countNodes(tree.root)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
