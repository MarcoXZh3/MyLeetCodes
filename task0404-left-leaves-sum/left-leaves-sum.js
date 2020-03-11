const path = require('path');
const { BinaryTreeNode, arrToBinTree } = require(path.resolve('_utils/trees/binary-tree'));
const TreeNode = BinaryTreeNode;


/**
 * @param {TreeNode}    root    root node of the binary tree
 * @return {number}             sum of all the left leaves
 */
const sumOfLeftLeaves = function(root) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0404 - Sum of Left Leaves:');
  [
    [3, 9, 20, null, null, 15, 7],
  ].forEach( vs => {
    const tree = arrToBinTree(vs);
    console.log(tree.toString());
    console.log(`  sum=${sumOfLeftLeaves(tree.root)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
