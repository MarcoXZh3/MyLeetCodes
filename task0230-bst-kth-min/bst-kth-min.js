const path = require('path');
const { BinaryTreeNode, arrToBinTree } = require(path.resolve('_utils/binary-tree'));
const TreeNode = BinaryTreeNode;


/**
 * @param {TreeNode}    root    root node of the binary search tree
 * @param {number}      k       the kth smallest
 * @return {number}             the value of the target node
 */
const kthSmallest = function(root, k) {
  const recursion = (root) => {
    if (!root) {
      return null;
    }
    let target = recursion(root.left);
    if (target !== null) {
      return target;
    }
    if (--k === 0) {
      return root.val;
    }
    target = recursion(root.right);
    if (target !== null) {
      return target;
    }
    return null;
  };
  return recursion(root);
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0230 - Kth Smallest Element in a BST:');
  [
    [1, [3, 1, 4, null, 2]],
    [3, [5, 3, 6, 2, 4, null, null, 1]],
  ].forEach( vs => {
    const tree = arrToBinTree(vs[1]);
    console.log(`${tree.toString()}`);
    console.log(`  k=${vs[0]}, target=${kthSmallest(tree.root, vs[0])}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
