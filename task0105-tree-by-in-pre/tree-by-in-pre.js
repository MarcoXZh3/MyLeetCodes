const path = require('path');
const { BinaryTreeNode, printTree } = require(path.resolve('_utils/tree'));
const TreeNode = BinaryTreeNode;


/**
 * @param {number[]}    preorder  values of the preorder traversal
 * @param {number[]}    inorder   values of the inorder traversal
 * @return {TreeNode}             root of the binary tree
 */
const buildTree = function(preorder, inorder) {

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
