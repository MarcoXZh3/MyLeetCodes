const path = require('path');
const { BinaryTreeNode, arrToBinTree } = require(path.resolve('_utils/binary-tree'));
const TreeNode = BinaryTreeNode;


/**
 * @param {TreeNode}    root    root node of the binary tree
 * @return {number}             the max path sum
 */
const maxPathSum = function(root) {
  const recursion = (root) => {
    if (!root) {
      return 0;
    }
    const left = Math.max(0, recursion(root.left));
    const right = Math.max(0, recursion(root.right));
    max = Math.max(max, left + right + root.val);
    return Math.max(left, right) + root.val;
  };
  let max = Number.MIN_SAFE_INTEGER;
  recursion(root);
  return max;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0124 - Binary Tree Maximum Path Sum:');
  [
    [1, 2, 3],
    [-10, 9, 20, null, null, 15, 7],
    [2, -1],
    [1, 2, null, null, 3, null, null, null, null, null, 4, null,
     null, null, null, null, null, null, null, null, null, null, 5],
  ].forEach( vs => {
    const tree = arrToBinTree(vs);
    console.log(tree.toString());
    console.log(`  max=${maxPathSum(tree.root)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
