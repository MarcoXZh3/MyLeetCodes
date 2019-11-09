const path = require('path');
const { BinaryTreeNode, arrToBinTree } = require(path.resolve('_utils/trees/binary-tree'));
const TreeNode = BinaryTreeNode;


/**
 * @param {TreeNode}  root    root of the binary tree
 * @return {number}           max depth of the tree
 */
const maxDepth = function(root) {
  return root ? 1 + Math.max(maxDepth(root.left), maxDepth(root.right)) : 0;
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
    const tree = arrToBinTree(vs);
    console.log(tree.toString());
    console.log(`  max=${maxDepth(tree.root)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
