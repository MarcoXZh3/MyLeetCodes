const path = require('path');
const { BinaryTreeNode, array2bintree, printTree } = require(path.resolve('_utils/tree'));
const TreeNode = BinaryTreeNode;


/**
 * @param {TreeNode}  root  root of the tree
 * @return {boolean}        whether symmetric or not
 */
const isSymmetric = function(root) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0101 - Symmetric Tree:');
  [
    [1, 2, 2, 3, 4, 4, 3],
    [1, 2, 2, null, 3, null, 3],
  ].forEach( vs => {
    const root = array2bintree(vs);
    console.log(printTree(root));
    console.log(`  symmetric=${isSymmetric(root)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
