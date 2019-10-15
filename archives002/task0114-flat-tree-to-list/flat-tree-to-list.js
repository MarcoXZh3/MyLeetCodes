const path = require('path');
const { BinaryTreeNode, arrToBinTree } = require(path.resolve('_utils/binary-tree'));
const TreeNode = BinaryTreeNode;


/**
 * recursion
 * @param {TreeNode}  root    root of the binary tree
 * @return {void} Do not return anything, modify root in-place instead.
 */
const flatten0 = function(root) {
  const recursion = (root) => {
    if (!root) {
      return null;
    }
    let flat = recursion(root.left);
    const right = root.right;
    if (flat) {
      root.left = null;
      root.right = flat;
      while (flat.right) {
        flat = flat.right;
      }
      flat.right = right;
    }
    recursion(right);
    return root;
  };
  recursion(root);
};


/**
 * iteration
 * @param {TreeNode}  root    root of the binary tree
 * @return {void} Do not return anything, modify root in-place instead.
 */
const flatten = function(root) {
  while (root) {
    if (root.left) {
      let prev = root.left;
      while (prev.right) {
        prev = prev.right;
      }
      prev.right = root.right;
      root.right = root.left;
      root.left = null;
    }
    root = root.right;
  }
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0109 - Convert Sorted List to Binary Search Tree:');
  [
    [1, 2, 5, 3, 4, null, 6],
    [1, null, 2],
    [1, null, 2, null, null, 3],
  ].forEach( vs => {
    const tree = arrToBinTree(vs);
    const lines0 = tree.toString().split('\n');
    flatten(root);
    const lines1 = tree.toString().split('\n');
    for (let i = 0; i < lines0.length; i++) {
      console.log(`  ${lines0[i]}     ${lines1[i] || ''}`);
    }
    let s = '';
    while (s.length < (lines0[0] || '').length) {
      s += ' ';
    }
    for (let i = lines0.length; i < lines1.length; i++) {
      console.log(`  ${s}     ${lines1[i] || ''}`);
    }
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
