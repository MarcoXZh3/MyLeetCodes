const path = require('path');
const { BinaryTreeNode, arrToBinTree } = require(path.resolve('_utils/trees/binary-tree'));
const TreeNode = BinaryTreeNode;


/**
 * @param {TreeNode}    root    the root node of the binary tree
 * @return {number}             max number
 */
const rob = function(root) {
  const recursion = (root) => {
    if (!root) {
      return [0, 0];
    }
    const lefts = recursion(root.left);
    const rights = recursion(root.right);
    return [
      lefts[1] + rights[1] + root.val,
      Math.max(...lefts) + Math.max(...rights),
    ];
  };
  return Math.max(...recursion(root));
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
