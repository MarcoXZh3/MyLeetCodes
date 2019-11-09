const path = require('path');
const { BinaryTreeNode, arrToBinTree } = require(path.resolve('_utils/trees/binary-tree'));
const TreeNode = BinaryTreeNode;


/**
 * recursion
 * @param {TreeNode}    root    root node of the binary tree
 * @return {number[]}           the traversal results
 */
const postorderTraversal0 = function(root) {
  const recursion = (root, res) => {
    if (!root) {
      return ;
    }
    recursion(root.left, res);
    recursion(root.right, res);
    res.push(root.val);
  };
  const res = [];
  recursion(root, res);
  return res;
};


/**
 * iteration with stack and hash set
 * @param {TreeNode}    root    root node of the binary tree
 * @return {number[]}           the traversal results
 */
const postorderTraversal1 = function(root) {
  const res = [];
  if (!root) {
    return res;
  }

  const stack = [root];
  const visited = new Set();
  while (stack.length > 0) {
    let top = stack[stack.length - 1];
    if (top.left && !visited.has(top.left)) {
      stack.push(top.left);
      visited.add(top.left);
    } else if (top.right && !visited.has(top.right)) {
      stack.push(top.right);
      visited.add(top.right);
    } else {
      res.push(stack.pop().val);
    }
    top = stack[stack.length - 1];
  }
  return res;
};


/**
 * iteration with stack only
 * @param {TreeNode}    root    root node of the binary tree
 * @return {number[]}           the traversal results
 */
const postorderTraversal = function(root) {
  const res = [];
  if (!root) {
    return res;
  }
  const stack = [root];
  while (stack.length > 0) {
    const cur = stack.pop();
    res.unshift(cur.val);
    if (cur.left) {
      stack.push(cur.left);
    }
    if (cur.right) {
      stack.push(cur.right);
    }
  }
  return res;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0145 - Binary Tree Postorder Traversal:');
  [
    [1, null, 2, null, null, 3],
  ].forEach( vs => {
    const tree = arrToBinTree(vs);
    console.log(`post=[${postorderTraversal(tree.root).join(', ')}]`);
    console.log(tree.toString());
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
