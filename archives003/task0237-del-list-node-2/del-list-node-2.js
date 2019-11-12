const path = require('path');
const { ListNode, array2list, printList } = require(path.resolve('_utils/list'));


/**
 * @param {ListNode}  node      the node of the linked list to delete
 * @return {void} Do not return anything, modify node in-place instead.
 */
const deleteNode = function(node) {
  node.val = node.next.val;
  node.next = node.next.next;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0237 - Delete Node in a Linked List:');
  [
    [5, [4, 5, 1, 9]],
    [1, [4, 5, 1, 9]],
  ].forEach( vs => {
    const list = array2list(vs[1]);
    console.log(`  list=${printList(list)}, target=${vs[0]}`);
    let cur = list;
    while (cur && cur.val !== vs[0]) {
      cur = cur.next;
    }
    deleteNode(cur);
    console.log(`  list=${printList(list)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
