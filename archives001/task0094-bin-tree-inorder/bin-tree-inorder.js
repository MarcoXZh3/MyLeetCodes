const path = require('path');
const { BinaryTreeNode, arrToBinTree } = require(path.resolve('_utils/binary-tree'));
const TreeNode = BinaryTreeNode;


/**
 * recursion
 * @param {TreeNode}    root    root of the binary tree
 * @return {number[]}           the inorder traversal array
 */
const inorderTraversal0 = function(root) {
  /**
   * @param {TreeNode}    root    root of the binary tree
   * @return {number[]}           the inorder traversal array
   */
  const recursion = (root, res) => {
    if (root) {
      recursion(root.left, res);  // traverse the left sub tree
      res.push(root.val);         // visit the node itself
      recursion(root.right, res); // traverse the right sub tree
    }
  };

  // recursively do the inorder traversal
  const res = [];
  recursion(root, res);
  return res;
};


/**
 * iteration with stack
 * @param {TreeNode}    root    root of the binary tree
 * @return {number[]}           the inorder traversal array
 */
const inorderTraversal = function(root) {
  const res = [];
  const stack = [];
  let cur = root;
  while (cur || stack.length > 0) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    res.push(cur.val);
    cur = cur.right;
  }
  return res;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0094 - Binary Tree Inorder Traversal:');
  [
    [1, null, 2, null, null, 3],
    [  37,  -34, -48,  null, -100, -100,   48, null, null, null, null, null,
     null,  -54, null, null, null, null, null, null, null, null, null, null,
     null, null, null,  -71,  -22, null, null, null, null, null, null, null,
     null, null, null, null, null, null, null, null, null, null, null, null,
     null, null, null, null, null, null, null, null, null, null, 8],
    // [-34, -100, 37, -100, -48, -71, -54, -22, 8, 48]
  ].forEach( vs => {
    const tree = arrToBinTree(vs);
    console.log(`inor=[${inorderTraversal(tree.root).join(', ')}]`);
    console.log(tree.toString());
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
