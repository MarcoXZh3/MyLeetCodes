const path = require('path');
const { ListNode, array2list, printList } = require(path.resolve('_utils/list'));


/**
 * @param {ListNode}    head    head of the linked list
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList0 = function(head) {
  let cur = head;
  while (cur) {
    let prev = null;
    let tail = cur;
    while (tail.next) {
      prev = tail;
      tail = tail.next;
    }
    if (cur === tail || cur === prev) {
      break ;
    }
    const next = cur.next;
    cur.next = tail;
    tail.next = next;
    prev.next = null;
    cur = next;
  }
};


/**
 * reverse 2nd half and reorder the two halves
 * @param {ListNode}    head    head of the linked list
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = function(head) {
  if (!head || !head.next) {
    return ;
  }
  let p1 = head;
  let p2 = head;
  while (p2.next && p2.next.next) {
    p1 = p1.next;
    p2 = p2.next.next;
  }

  // reverse the 2nd half so 1->2->3->4->5 becomes 1->2->3->5->4
  const mid = p1;
  const next = p1.next;
  while (next.next) {
    const cur = next.next;
    next.next = cur.next;
    cur.next = mid.next;
    mid.next = cur;
  }

  // reorder the two parts
  p1 = head;
  p2 = mid.next;
  while (p1 !== mid) {
    mid.next = p2.next;
    p2.next = p1.next;
    p1.next = p2;
    p1 = p2.next;
    p2 = mid.next;
  }
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0143 - Reorder List:');
  [
    [1, 2, 3, 4],
    [1, 2, 3, 4, 5],
  ].forEach( vs => {
    const list = array2list(vs);
    console.log(`  old=${printList(list)}`);
    reorderList(list);
    console.log(`  new=${printList(list)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
