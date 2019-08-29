const path = require('path');
const { BinaryTreeNode, printTree } = require(path.resolve('_utils/tree'));
const TreeNode = BinaryTreeNode;


/**
 * @param {number[]}    nums    the sorted array of numbers
 * @return {TreeNode}           the binary search tree
 */
const sortedArrayToBST = function(nums) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0108 - Convert Sorted Array to Binary Search Tree:');
  [
    [-10, -3, 0, 5, 9],
  ].forEach( vs => {
    console.log(`[${vs.join(', ')}]`);
    const root = sortedArrayToBST(vs);
    console.log(printTree(root));
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
