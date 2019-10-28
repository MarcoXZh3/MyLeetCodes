const path = require('path');
const { BinaryTreeNode, arrToBinTree } = require(path.resolve('_utils/binary-tree'));
const TreeNode = BinaryTreeNode;


/**
 * @param {TreeNode}    root    root node of the binary search tree
 * @param {TreeNode}    p       1st tree node
 * @param {TreeNode}    q       2nd tree node
 * @return {TreeNode}           the lowest common ancestor
 */
const lowestCommonAncestor = function(root, p, q) {
  const recursion = (root) => {
    if (!root) {
      return null;
    } else if (root.val >= p.val && root.val <= q.val) {
      return root;
    } else {
      return recursion(root.left) || recursion(root.right);
    }
  };
  if (p.val > q.val) {
    const tmp = p;
    p = q;
    q = tmp;
  }
  return recursion(root);
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0235 - Lowest Common Ancestor of a Binary Search Tree:');
  [
    [2, 8, [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]],
    [2, 4, [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]],
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
