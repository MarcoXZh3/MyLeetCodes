const path = require('path');
const { BinaryTreeNode, BinaryTree, arrToBinTree } = require(path.resolve('_utils/binary-tree'));
const TreeNode = BinaryTreeNode;


/**
 * @param {TreeNode}    root    the original binary tree
 * @return {TreeNode}
 */
const invertTree = function(root) {

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
