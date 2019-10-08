const path = require('path');
const { ListNode, array2list, printList } = require(path.resolve('_utils/list'));



/**
 * two rounds: count length first, then calculate the node to remove
 * @param {ListNode}    head      head of the singly-linked list
 * @param {number}      n         backward count of the node to be removed
 * @return {ListNode}             head of the updated list
 */
const removeNthFromEnd1 = function(head, n) {
  let cur = head;

  // count how many nodes in the list
  let cnt = 0;
  while (cur) {
    cur = cur.next;
    cnt ++;
  }

  // if to remove head
  if (cnt === n) {
    return head.next;
  }

  // find the node BEFORE the target
  n = cnt - n - 1;
  cnt = 0;
  cur = head;
  while (cnt++ < n) {
    cur = cur.next;
  }

  // remove target: link the node BEFORE target to the node AFTER target
  cur.next = cur.next.next;
  return head;
};


/**
 * one round: two pointers with gap of n nodes
 * @param {ListNode}    head      head of the singly-linked list
 * @param {number}      n         backward count of the node to be removed
 * @return {ListNode}             head of the updated list
 */
const removeNthFromEnd = function(head, n) {
  let cur = head;
  let prev = null;      // the node before the target, i.e. (n+1)-th before tail

  // loop every node, preserving the (n+1)-th node before current
  while (cur) {
    if (n-- === 0) {    // (n+1)-th deley reached
      prev = head;
    } else if (prev) {  // (n+1)-th node available
      prev = prev.next;
    }
    cur = cur.next;
  }
  if (prev) {           // (n+1)-th before tail available
    prev.next = prev.next.next;
  } else if (n === 0) { // node to be removed (n-th) is head
    head = head.next;
  }
  return head;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0019 - Remove Nth Node From End of List:');
  [
    [ [1, 2, 3, 4, 5], 2],
    [ [1], 1],
    [ [1, 2], 2],
  ].forEach( vs => {
    const list = array2list(vs[0]);
    console.log(`  old=${printList(list)}, n=${vs[1]}`);
    console.log(`  new=${printList(removeNthFromEnd(list, vs[1]))}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
