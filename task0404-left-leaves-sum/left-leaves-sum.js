const path = require('path');
const { BinaryTreeNode, arrToBinTree } = require(path.resolve('_utils/trees/binary-tree'));
const TreeNode = BinaryTreeNode;


/**
 * stack based BFS
 * @param {TreeNode}    root    root node of the binary tree
 * @return {number}             sum of all the left leaves
 */
const sumOfLeftLeaves1 = function(root) {
  if (!root) {
    return 0;
  }
  let sum = 0;
  const stack = [root];
  while (stack.length > 0) {
    const cur = stack.pop();
    if (cur.left) {
      if (!cur.left.left && !cur.left.right) {
        sum += cur.left.val;
      } else {
        stack.push(cur.left);
      }
    }
    if (cur.right) {
      stack.push(cur.right);
    }
  }
  return sum;
};


/**
 * recursion
 * @param {TreeNode}    root    root node of the binary tree
 * @return {number}             sum of all the left leaves
 */
const sumOfLeftLeaves = function(root) {
  const recursion = (root) => {
    if (!root) {
      return 0;
    } else if (root.left && !root.left.left && !root.left.right) {
      return root.left.val + recursion(root.right);
    } else {
      return recursion(root.left) + recursion(root.right);
    }
  };
  return root ? recursion(root) : 0;
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
