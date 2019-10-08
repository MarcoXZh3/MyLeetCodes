const path = require('path');
const { BinaryTreeNode, printTree } = require(path.resolve('_utils/tree'));
const TreeNode = BinaryTreeNode;


/**
 * @param {number[]}    preorder  values of the preorder traversal
 * @param {number[]}    inorder   values of the inorder traversal
 * @return {TreeNode}             root of the binary tree
 */
const buildTree = function(preorder, inorder) {
  const recursion = (pres, ins, start, end) => {
    // locate the value of 1st of preorder in inorder
    let idx = start;
    while (idx < end && ins[idx] !== pres[0]) {
      idx ++;
    }
    // not found - don't create new node
    if (idx >= end) {
      return null;
    }
    // found - create new node and return it at the end
    const root = new TreeNode(pres.shift());
    // left child comes out from left half of inorder
    root.left = recursion(pres, ins, start, idx);
    // right child comes out from right half of inorder
    root.right = recursion(pres, ins, idx + 1, end);
    return root;
  };
  return recursion(preorder, inorder, 0, inorder.length);
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0105 - Construct Binary Tree from Preorder and Inorder Traversal:');
  [
    [[3, 9, 20, 15, 7], [9, 3, 15, 20, 7]],
  ].forEach( vs => {
    console.log(`pre=[${vs[0].join(', ')}]; in=[${vs[1].join(', ')}]`);
    const root = buildTree(vs[0], vs[1]);
    console.log(printTree(root));
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
