const { BinaryTreeNode, array2bintree, printTree } = require('../_utils/tree');
const TreeNode = BinaryTreeNode;


/**
 * recursion
 * @param {TreeNode}    root    root of the binary tree
 * @return {number[]}           the inorder traversal array
 */
const inorderTraversal = function(root) {
  return [];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0094 - Binary Tree Inorder Traversal:');
  [
    [1, null, 2, null, null, 3],
  ].forEach( vs => {
    const root = array2bintree(vs);
    console.log(`  tree=[${vs.map( v=>v==null?'null':v ).join(', ')}]`);
    console.log(`  inor=[${inorderTraversal(root).join(', ')}]`);
    console.log(`${printTree(root)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
