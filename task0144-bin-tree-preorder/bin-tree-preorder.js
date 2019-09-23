const path = require('path');
const { BinaryTreeNode, array2bintree, printTree } = require(path.resolve('_utils/tree'));
const TreeNode = BinaryTreeNode;


/**
 * recursion
 * @param {TreeNode}    root    root node of the binary tree
 * @return {number[]}           the traversal results
 */
const preorderTraversal0 = function(root) {
  const recursion = (root, res) => {
    if (!root) {
      return ;
    }
    res.push(root.val);
    recursion(root.left, res);
    recursion(root.right, res);
  };
  const res = [];
  recursion(root, res);
  return res;
};


/**
 * iteration by stack
 * @param {TreeNode}    root    root node of the binary tree
 * @return {number[]}           the traversal results
 */
const preorderTraversal = function(root) {
  const stack = [];
  if (!root) {
    return stack;
  }

  const res = [];
  stack.push(root);
  while (stack.length > 0) {
    const cur = stack.pop();
    res.push(cur.val);
    if (cur.right) {
      stack.push(cur.right);
    }
    if (cur.left) {
      stack.push(cur.left);
    }
  }
  return res;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0144 - Binary Tree Preorder Traversal:');
  [
    [1, null, 2, null, null, 3],
  ].forEach( vs => {
    const root = array2bintree(vs);
    console.log(`pre=[${preorderTraversal(root).join(', ')}]`);
    console.log(printTree(root));
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
