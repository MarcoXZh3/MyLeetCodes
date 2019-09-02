const path = require('path');
const { BinaryTreeNode, array2bintree, printTree } = require(path.resolve('_utils/tree'));
const TreeNode = BinaryTreeNode;


/**
 * @param {TreeNode}  root    root node of the tree
 * @param {number}    sum     the target sum
 * @return {number[][]}       all the solutions
 */
const pathSum = function(root, sum) {
  return [];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0113 - Path Sum II:');
  [
    [[5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, null, null, 1], 22],
  ].forEach( vs => {
    const root = array2bintree(vs[0]);
    console.log(printTree(root));
    console.log(`  paths=${`[${pathSum(root, vs[1]).map(p=>`[${p.join(',')}]`).join(', ')}]`}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
