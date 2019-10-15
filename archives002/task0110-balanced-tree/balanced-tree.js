const path = require('path');
const { BinaryTreeNode, arrToBinTree } = require(path.resolve('_utils/binary-tree'));
const TreeNode = BinaryTreeNode;


/**
 * @param {TreeNode}    root    root of the binary tree
 * @return {boolean}            whether the tree is balanced or not
 */
const isBalanced = function(root) {
  const depth = (root) => {
    return root ? Math.max(depth(root.left), depth(root.right)) + 1 : 0;
  };
  const recursion = (root) => {
    return !root || Math.abs(depth(root.left) - depth(root.right)) <= 1 &&
                    recursion(root.left) && recursion(root.right);
  };
  return recursion(root);
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0110 - Balanced Binary Tree:');
  [
    [3, 9, 20, null, null, 15, 7],
    [1, 2, 2, 3, 3, null, null, 4, 4],
    [1, null, 2, null, null, null, 3],
    [1, 2, 2, 3, 3, null, null, 4, 4],
    [1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, null, null, 5, 5],
  ].forEach( vs => {
    const tree = arrToBinTree(vs);
    console.log(`  balanced=${isBalanced(tree.root)}`);
    console.log(tree.toString());
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
