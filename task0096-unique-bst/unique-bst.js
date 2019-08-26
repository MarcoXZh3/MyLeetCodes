// const { BinaryTreeNode, array2bintree, printTree } = require('../_utils/tree');
// const TreeNode = BinaryTreeNode;


/**
 * @param {number}      n   number of nodes
 * @return {number}         how many BSTs to hold these many nodes
 */
const numTrees = function(n) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0096 - Unique Binary Search Trees:');
  [
    3,
  ].forEach( v => {
    console.log(`  n=${v}, BSTs=${numTrees(v)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
