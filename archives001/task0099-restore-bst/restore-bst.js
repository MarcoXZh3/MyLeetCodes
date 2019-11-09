const path = require('path');
const { BinaryTreeNode, arrToBinTree } = require(path.resolve('_utils/trees/binary-tree'));
const TreeNode = BinaryTreeNode;


/**
 * @param {TreeNode}    root    the root node of the binary tree
 * @return {void} Do not return anything, modify root in-place instead.
 */
const recoverTree = function(root) {
  const recursion = (root) => {
    if (root) {
      recursion(root.left);
      // mis-ordered node found
      if (prev && prev.val >= root.val) {
        first = first || prev;
        second = root;
      }
      prev = root;
      recursion(root.right);
    }
  };

  // in-order traverse and collect the node orders
  let prev = null;
  let first = null;
  let second = null;
  recursion(root);
  // the two nodes found - swap them
  prev = first.val;
  first.val = second.val;
  second.val = prev;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0099 - Recover Binary Search Tree:');
  [
    [1, 3, null, null, 2],
    [3, 1, 4, null, null, 2],
  ].forEach( vs => {
    const tree = arrToBinTree(vs);
    const lines0 = tree.toString().split('\n');
    recoverTree(tree.root);
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
    console.log('');
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
