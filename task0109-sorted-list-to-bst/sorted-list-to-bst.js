const path = require('path');
const { ListNode, array2list, printList } = require(path.resolve('_utils/list'));
const { BinaryTreeNode, printTree } = require(path.resolve('_utils/tree'));
const TreeNode = BinaryTreeNode;


/**
 * @param {ListNode}    head    head of the sorted list
 * @return {TreeNode}           the binary tree
 */
const sortedListToBST = function(head) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0109 - Convert Sorted List to Binary Search Tree:');
  [
    [-10, -3, 0, 5, 9],
  ].forEach( vs => {
    const head = array2list(vs);
    console.log(printList(head));
    const root = sortedListToBST(vs);
    console.log(printTree(root));
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
