const path = require('path');
const { ListNode, array2list, printList } = require(path.resolve('_utils/list'));


/**
 * @param {ListNode}    head    head node of the linked list
 * @return {ListNode}           the head node of the reordered linked list
 */
const oddEvenList = function(head) {
  if (!head) {
    return head;
  }
  let head2 = head.next;
  let cur1 = head;
  let cur2 = head2;
  while (cur1 && cur1.next && cur2.next) {
    cur1.next = cur1.next.next;
    cur2.next = cur2.next.next;
    cur1 = cur1.next;
    cur2 = cur2.next;
  }
  cur1.next = head2;
  return head;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0328 - Odd Even Linked List:');
  [
    [1, 2, 3, 4, 5],
    [2, 1, 3, 5, 6, 4, 7],
  ].forEach( vs => {
    const list = array2list(vs);
    console.log(`  list=${printList(list)}; reordered=${printList(oddEvenList(list))}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
