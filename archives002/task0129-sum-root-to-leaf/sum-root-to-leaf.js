const path = require('path');
const { BinaryTreeNode, arrToBinTree } = require(path.resolve('_utils/trees/binary-tree'));
const TreeNode = BinaryTreeNode;


/**
 * @param {TreeNode}    root    root of the binary tree
 * @return {number}             the sum from root to all leaves
 */
const sumNumbers = function(root) {
  const recursion = (root, sum) => {
    return root ? (
            !root.left && !root.right ? sum * 10 + root.val :
                                        recursion(root.left, sum * 10 + root.val) +
                                        recursion(root.right, sum * 10 + root.val)
           ) : 0;
  }
  return recursion(root, 0);
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0129 - Sum Root to Leaf Numbers:');
  [
    [1, 2, 3],
    [4, 9, 0, 5, 1],
  ].forEach( vs => {
    const tree = arrToBinTree(vs);
    console.log(tree.toString());
    console.log(`  sum=${sumNumbers(tree.root)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
