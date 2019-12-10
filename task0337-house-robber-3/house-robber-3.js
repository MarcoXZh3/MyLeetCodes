const path = require('path');
const { BinaryTreeNode, arrToBinTree } = require(path.resolve('_utils/trees/binary-tree'));
const TreeNode = BinaryTreeNode;


/**
 * @param {TreeNode} root
 * @return {number}
 */
const rob = function(root) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0337 - House Robber III:');
  [
    [3, 2, 3, null, 3, null, 1],
    [3, 4, 5, 1, 3, null, 1],
  ].forEach( vs => {
    const tree = arrToBinTree(vs);
    console.log(tree.toString());
    console.log(`  total=${rob(tree.root)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
