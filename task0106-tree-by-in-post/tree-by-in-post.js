const path = require('path');
const { BinaryTreeNode, printTree } = require(path.resolve('_utils/tree'));
const TreeNode = BinaryTreeNode;


/**
 * @param {number[]}    inorder   values of the inorder traversal
 * @param {number[]}    postorder values of the postorder traversal
 * @return {TreeNode}             root of the binary tree
 */
const buildTree = function(inorder, postorder) {
  const recursion = (ins, posts, start, end) => {
    // locate the value of last of postorder in inorder
    let idx = end - 1;
    while (idx >= start && ins[idx] !== posts[posts.length - 1]) {
      idx --;
    }
    // not found - don't create new node
    if (idx < start) {
      return null;
    }
    // found - create new node and return it at the end
    const root = new TreeNode(posts.pop());
    // right child comes out from right half of inorder
    root.right = recursion(ins, posts, idx + 1, end);
    // left child comes out from left half of inorder
    root.left = recursion(ins, posts, start, idx);
    return root;
  };
  return recursion(inorder, postorder, 0, inorder.length);
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0106 - Construct Binary Tree from Inorder and Postorder Traversal:');
  [
    [[9, 3, 15, 20, 7], [9, 15, 7, 20, 3]],
  ].forEach( vs => {
    console.log(`in=[${vs[0].join(', ')}]; post=[${vs[1].join(', ')}]`);
    const root = buildTree(vs[0], vs[1]);
    console.log(printTree(root));
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
