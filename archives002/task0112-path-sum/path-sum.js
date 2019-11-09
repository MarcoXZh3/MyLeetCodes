const path = require('path');
const { BinaryTreeNode, arrToBinTree } = require(path.resolve('_utils/trees/binary-tree'));
const TreeNode = BinaryTreeNode;


/**
 * @param {TreeNode}  root    root node of the tree
 * @param {number}    sum     the target sum
 * @return {boolean}          whether the path exists
 */
const hasPathSum = function(root, sum) {
  const recursion = (root, cur, sum) => {
    return !root.left && !root.right ? cur + root.val === sum :
           (root.left ? recursion(root.left, cur + root.val, sum) : false) ||
           (root.right ? recursion(root.right, cur + root.val, sum) : false);
  };
  return root ? recursion(root, 0, sum) : false;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0112 - Path Sum:');
  [
    [[5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, null, null, 1], 22],
  ].forEach( vs => {
    const tree = arrToBinTree(vs[0]);
    console.log(tree.toString());
    console.log(`  path=${hasPathSum(tree.root, vs[1])}; sum=${vs[1]}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
