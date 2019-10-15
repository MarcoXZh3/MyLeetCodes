const path = require('path');
const { BinaryTreeNode, arrToBinTree } = require(path.resolve('_utils/binary-tree'));
const TreeNode = BinaryTreeNode;


/**
 * definition of BST by recursion
 * @param {TreeNode}    root    root of the binary tree
 * @return {boolean}            whether the binary tree is a binary search tree
 */
const isValidBST = function(root) {
  const recursion = (node, lower, upper) => {
    return node ? (lower == null || node.val > lower) &&
                  (upper == null || node.val < upper) &&
                  recursion(node.left, lower, node.val) &&
                  recursion(node.right, node.val, upper)
                : true;
  };
  return recursion(root, null, null);
};


/**
 * in-order traversal returns a sorted array
 * @param {TreeNode}    root    root of the binary tree
 * @return {boolean}            whether the binary tree is a binary search tree
 */
const isValidBST1 = function(root) {
  const inorder = (root, res) => {
    if (root) {
      inorder(root.left, res);  // traverse the left sub tree
      if (root.val <= res[res.length - 1]) {
        re = false;
      }
      res.push(root.val);         // visit the node itself
      inorder(root.right, res); // traverse the right sub tree
    }
  };

  let re = true;
  const res = [];
  inorder(root, res);
  return re;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0098 - Validate Binary Search Tree:');
  [
    [2, 1, 3],
    [5, 1, 4, null, null, 3, 6],
    [10, 5, 15, null, null, 6, 20],
  ].forEach( vs => {
    const tree = arrToBinTree(vs);
    console.log(`valid=${isValidBST(tree.root)}`);
    console.log(tree.toString());
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
