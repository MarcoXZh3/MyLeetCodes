const { BinaryTreeNode, array2bintree, printTree } = require('../_utils/tree');
const TreeNode = BinaryTreeNode;


/**
 * @param {TreeNode}    root    the root node of the binary tree
 * @return {void} Do not return anything, modify root in-place instead.
 */
const recoverTree = function(root) {

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
    const root = array2bintree(vs);
    const lines0 = printTree(root).split('\n');
    recoverTree(root);
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
    console.log('');
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
