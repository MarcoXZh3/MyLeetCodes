const path = require('path');
const { ListNode, array2list, printList } = require(path.resolve('_utils/list'));
const { BinaryTreeNode, printTree } = require(path.resolve('_utils/tree'));
const TreeNode = BinaryTreeNode;


/**
 * @param {ListNode}    head    head of the sorted list
 * @return {TreeNode}           the binary tree
 */
const sortedListToBST = function(head) {
  const recursion = (head) => {
    let mid = head;
    let prev = null;
    let tail = head;
    while (tail && tail.next) {
      prev = mid;
      mid = mid.next;                   // mid skips 1 node every time
      tail = tail.next.next;            // while tail skips 2
    }
    if (!mid) {
      return null;
    }
    const root = new TreeNode(mid.val);
    if (prev) {                         // split the list at mid
      prev.next = null;
    } else {
      head = null;
    }
    root.left = recursion(head);        // left half goes to left sub tree
    root.right = recursion(mid.next);   // right half goes to right sub tree
    return root;
  };
  return recursion(head);
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
    const root = sortedListToBST(head);
    console.log(printTree(root));
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
