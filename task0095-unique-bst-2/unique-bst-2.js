const { BinaryTreeNode, printTree } = require('../_utils/tree');
const TreeNode = BinaryTreeNode;


/**
 * @param {number}        n     number of nodes the BSTs have
 * @return {TreeNode[]}         the list of BSTs holding the nodes
 */
const generateTrees = function(n) {
  return [];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0095 - Unique Binary Search Trees II:');
  [
    3,
  ].forEach( v => {
    const trees = generateTrees(v);
    console.log(`  n=${v}, BSTs=${trees.length}`);
    trees.forEach( (root, i, arr) => {
      console.log(`  ${i+1}/${arr.length}`);
      console.log(printTree(root));
    })
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
