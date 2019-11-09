const path = require('path');
const { BinaryTreeNode, arrToBinTree } = require(path.resolve('_utils/trees/binary-tree'));
const TreeNode = BinaryTreeNode;


/**
 * @param {TreeNode}  p   root of the 1st tree
 * @param {TreeNode}  q   root of the 1nd tree
 * @return {boolean}      whether they are same or not
 */
const isSameTree = function(p, q) {
  const recursion = (n1, n2) => {
    return n1 && n2 && n1.val === n2.val &&
           recursion(n1.left, n2.left) && recursion(n1.right, n2.right)
           || n1 == null && n2 == null;
  };
  return recursion(p, q);
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
    const tree0 = arrToBinTree(vs[0]);
    const tree1 = arrToBinTree(vs[1]);
    const lines0 = tree0.toString().split('\n');
    const lines1 = tree1.toString().split('\n');
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
    console.log(`  same=${isSameTree(tree0.root, tree1.root)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
