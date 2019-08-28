const { BinaryTreeNode, array2bintree, printTree } = require('../_utils/tree');
const TreeNode = BinaryTreeNode;


/**
 * @param {TreeNode}  p   root of the 1st tree
 * @param {TreeNode}  q   root of the 1nd tree
 * @return {boolean}      whether they are same or not
 */
const isSameTree = function(p, q) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0100 - Same Tree:');
  [
    [[1, 2, 3], [1, 2, 3]],
    [[1, 2], [1, null, 3]],
    [[1, 2, 1], [1, 1, 2]],
  ].forEach( vs => {
    const root0 = array2bintree(vs[0]);
    const root1 = array2bintree(vs[1]);
    const lines0 = printTree(root0).split('\n');
    const lines1 = printTree(root1).split('\n');
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
    console.log(`  same=${isSameTree(root0, root1)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
