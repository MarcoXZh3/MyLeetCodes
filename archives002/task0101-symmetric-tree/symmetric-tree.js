const path = require('path');
const { BinaryTreeNode, arrToBinTree } = require(path.resolve('_utils/trees/binary-tree'));
const TreeNode = BinaryTreeNode;


/**
 * recursion
 * @param {TreeNode}  root  root of the tree
 * @return {boolean}        whether symmetric or not
 */
const isSymmetric0 = function(root) {
  const recursion = (root1, root2) => {
    return !!(!root1 && !root2 ||
              root1 && root2 &&
              root1.val === root2.val &&
              recursion(root1.left, root2.right) &&
              recursion(root1.right, root2.left)
           );
  };
  return !root || recursion(root.left, root.right);
};


/**
 * iteration with a queue
 * @param {TreeNode}  root  root of the tree
 * @return {boolean}        whether symmetric or not
 */
const isSymmetric = function(root) {
  const queue = [];
  queue.unshift(root);
  queue.unshift(root);
  while(queue.length > 0) {
    const node1 = queue.pop();
    const node2 = queue.pop();
    if (!node1 && !node2) {
      continue ;
    }
    if (!node1 || !node2 || node1.val !== node2.val) {
      return false;
    }
    queue.unshift(node1.left);
    queue.unshift(node2.right);
    queue.unshift(node1.right);
    queue.unshift(node2.left);
  }
  return true;
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
    [1, 2, 2, 2, null, 2],
    [1, 0],
  ].forEach( vs => {
    const tree = arrToBinTree(vs);
    console.log(tree.toString());
    console.log(`  symmetric=${isSymmetric(tree.root)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
