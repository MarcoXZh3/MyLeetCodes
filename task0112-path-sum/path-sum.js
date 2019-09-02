const path = require('path');
const { BinaryTreeNode, array2bintree, printTree } = require(path.resolve('_utils/tree'));
const TreeNode = BinaryTreeNode;


/**
 * @param {TreeNode}  root    root node of the tree
 * @param {number}    sum     the target sum
 * @return {boolean}          whether the path exists
 */
const hasPathSum = function(root, sum) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0112 - Path Sum:');
  [
    [[5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, null, null, 1], 22],
  ].forEach( vs => {
    const root = array2bintree(vs[0]);
    console.log(printTree(root));
    console.log(`  path=${hasPathSum(root, vs[1])}; sum=${vs[1]}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
