const path = require('path');
const { BinaryTreeNode, printTree } = require(path.resolve('_utils/tree'));
const TreeNode = BinaryTreeNode;


/**
 * @param {number[]}    inorder   values of the inorder traversal
 * @param {number[]}    postorder values of the postorder traversal
 * @return {TreeNode}             root of the binary tree
 */
const buildTree = function(inorder, postorder) {

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
