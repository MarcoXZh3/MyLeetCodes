const path = require('path');
const { BinaryTreeNode, array2bintree, printTree } = require(path.resolve('_utils/tree'));
const TreeNode = BinaryTreeNode;


/**
 * recursion with pre-order traversal
 * @param {TreeNode}      root    root of the tree
 * @return {number[][]}           tree node values by level
 */
const zigzagLevelOrder = function(root) {
  return [];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0103 - Binary Tree Zigzag Level Order Traversal:');
  [
    [3, 9, 20, null, null, 15, 7],
  ].forEach( vs => {
    const root = array2bintree(vs);
    console.log(printTree(root));
    console.log(`  breadth-first=[${zigzagLevelOrder(root).map( xs=>`[${xs.join(',')}]`).join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
