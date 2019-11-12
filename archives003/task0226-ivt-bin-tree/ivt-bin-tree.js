const path = require('path');
const { BinaryTreeNode, BinaryTree, arrToBinTree } = require(path.resolve('_utils/trees/binary-tree'));
const TreeNode = BinaryTreeNode;


/**
 * recursion
 * @param {TreeNode}    root    the original binary tree
 * @return {TreeNode}
 */
const invertTree0 = function(root) {
  const recursion = (root) => {
    if (root) {
      const tmp = root.left;
      root.left = root.right;
      root.right = tmp;
      recursion(root.left);
      recursion(root.right);
    }
  };
  recursion(root);
  return root;
};


/**
 * iteration by queue
 * @param {TreeNode}    root    the original binary tree
 * @return {TreeNode}
 */
const invertTree = function(root) {
  if (root) {
    const queue = [root];
    while (queue.length > 0) {
      const cur = queue.shift();
      const tmp = cur.left;
      cur.left = cur.right;
      cur.right = tmp;
      if (cur.left) {
        queue.push(cur.left);
      }
      if (cur.right) {
        queue.push(cur.right);
      }
    }
  }
  return root;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0226 - Invert Binary Tree:');
  [
    [4, 2, 7, 1, 3, 6, 9],
  ].forEach( vs => {
    const tree0 = arrToBinTree(vs);
    const lines0 = tree0.toString().split('\n');
    const lines1 = new BinaryTree(invertTree(tree0.root)).toString().split('\n');
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
