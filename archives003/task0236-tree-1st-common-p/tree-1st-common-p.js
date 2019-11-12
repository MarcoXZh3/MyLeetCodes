const path = require('path');
const { BinaryTreeNode, arrToBinTree } = require(path.resolve('_utils/trees/binary-tree'));
const TreeNode = BinaryTreeNode;


/**
 * @param {TreeNode}    root    root node of the binary tree
 * @param {TreeNode}    p       1st tree node
 * @param {TreeNode}    q       2nd tree node
 * @return {TreeNode}           the lowest common ancestor
 */
const lowestCommonAncestor = function(root, p, q) {
  const recursion = (root) => {
    if (!root) {
      return false;
    }
    let left = recursion(root.left, p, q) ? 1 : 0;
    let right = recursion(root.right, p, q) ? 1 : 0;
    let mid = root === p || root === q ? 1 : 0;
    if (mid + left + right >= 2) {
      re = root;
    }
    return mid + left + right > 0;
  };
  let re = null;
  recursion(root);
  return re;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0236 - Lowest Common Ancestor of a Binary Tree:');
  [
    [5, 1, [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]],
    [5, 4, [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]],
  ].forEach( vs => {
    const tree = arrToBinTree(vs[2]);
    const p = tree.search(vs[0]);
    const q = tree.search(vs[1]);
    console.log(tree.toString());
    console.log(`  p=${vs[0]}, q=${vs[1]}, ans=${lowestCommonAncestor(tree.root, p, q)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
