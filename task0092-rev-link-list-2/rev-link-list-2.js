const { ListNode, array2list, printList } = require('../_utils/list');


/**
 * @param {ListNode}    head    head of the list to be reversed
 * @param {number}      m       index of the starting node
 * @param {number}      n       index of the ending node
 * @return {ListNode}           head of the reversed list
 */
const reverseBetween = function(head, m, n) {
  const dummy = new ListNode(null);
  dummy.next = head;
  let idx = 0;
  let prev = dummy;
  let cur = dummy.next;

  // nodes before the starting point - simply loop through them
  while (++idx < m) {
    prev = cur;
    cur = cur.next;
  }

  // nodes between the starting and ending point - reverse them
  const tail = cur;
  cur = cur.next;
  while (idx++ < n) {
    const list = prev.next;
    prev.next = cur;
    cur = cur.next;
    prev.next.next = list;
  }

  // link the new tail to the rest of the list
  tail.next = cur;
  return dummy.next;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0092 - Reverse Linked List II:');
  [
    [[1, 2, 3, 4, 5], 2, 4],
  ].forEach( vs => {
    const list = array2list(vs[0]);
    console.log(`  list=${printList(list)}, rev=${printList(reverseBetween(list, vs[1], vs[2]))}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
