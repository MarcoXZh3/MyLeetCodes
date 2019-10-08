const path = require('path');
const { BinaryTreeNode, array2bintree, printTree } = require(path.resolve('_utils/tree'));
const TreeNode = BinaryTreeNode;


/**
 * @param {TreeNode}      root    root of the tree
 * @return {number[][]}           the 
 */
const levelOrderBottom0 = function(root) {
  const recursion = (root, level, res) => {
    if (!root) {
      return ;
    }
    if (level >= res.length) {
      res.unshift([]);
    }
    res[res.length - 1 - level].push(root.val);
    recursion(root.left, level + 1, res);
    recursion(root.right, level + 1, res);
  };
  const res = [];
  recursion(root, 0, res);
  return res;
};


/**
 * @param {TreeNode}      root    root of the tree
 * @return {number[][]}           the 
 */
const levelOrderBottom = function(root) {
  const res = [];
  if (!root) {
    return res;
  }
  const queue = [root];
  while (queue.length > 0) {
    const level = queue.length;
    const vals = [];
    for (let i = 0; i < level; i++) {
      if (queue[queue.length - 1].left) {
        queue.unshift(queue[queue.length - 1].left);
      }
      if (queue[queue.length - 1].right) {
        queue.unshift(queue[queue.length - 1].right);
      }
      vals.push(queue.pop().val);
    }
    res.unshift(vals);
  }
  return res;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0106 - Construct Binary Tree from Inorder and Postorder Traversal:');
  [
    [3, 9, 20, null, null, 15, 7],
  ].forEach( vs => {
    const root = array2bintree(vs);
    console.log(printTree(root));
    console.log(`  breadth-1st-reverse=[${levelOrderBottom(root).map( xs=>`[${xs.join(',')}]`).join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
