const path = require('path');
const { BinaryTreeNode, BinaryTree } = require(path.resolve('_utils/trees/binary-tree'));
const TreeNode = BinaryTreeNode;


/**
 * @param {number[]}    nums    the sorted array of numbers
 * @return {TreeNode}           the binary search tree
 */
const sortedArrayToBST = function(nums) {
  const recursion = (nums, start, end) => {
    const mid = Math.floor((start + end) / 2);
    if (mid < 0 || mid >= nums.length) {
      return null;
    }
    const root = new TreeNode(nums[mid]);
    if (start < mid) {
      root.left = recursion(nums, start, mid);
    }
    if (mid + 1 < end) {
      root.right = recursion(nums, mid + 1, end);
    }
    return root;
  };
  return recursion(nums, 0, nums.length);
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0108 - Convert Sorted Array to Binary Search Tree:');
  [
    [-10, -3, 0, 5, 9],
    [3, 5, 8],
  ].forEach( vs => {
    console.log(`[${vs.join(', ')}]`);
    const root = sortedArrayToBST(vs);
    console.log(new BinaryTree(root).toString());
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
