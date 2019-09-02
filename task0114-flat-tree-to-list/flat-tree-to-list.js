const path = require('path');
const { BinaryTreeNode, array2bintree, printTree } = require(path.resolve('_utils/tree'));
const TreeNode = BinaryTreeNode;


/**
 * @param {TreeNode}  root    root of the binary tree
 * @return {void} Do not return anything, modify root in-place instead.
 */
const flatten = function(root) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0109 - Convert Sorted List to Binary Search Tree:');
  [
    [1, 2, 5, 3, 4, null, 6],
  ].forEach( vs => {
    const root = array2bintree(vs);
    const lines0 = printTree(root).split('\n');
    flatten(root);
    const lines1 = printTree(root).split('\n');
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
