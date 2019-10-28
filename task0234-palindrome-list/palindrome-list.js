const path = require('path');
const { ListNode, array2list, printList } = require(path.resolve('_utils/list'));


/**
 * reverse the entire list by using array
 * @param {ListNode}    head    head of the linked list
 * @return {boolean}            whether palindrome or not
 */
const isPalindrome0 = function(head) {
  const nodes = [];
  let cur = head;
  while (cur) {
    nodes.push(cur);
    cur = cur.next;
  }
  for (let i = 0, j = nodes.length - 1; i < j; i++, j--) {
    if (nodes[i].val !== nodes[j].val) {
      return false;
    }
  }
  return true;
};


/**
 * reverse the 2nd half only
 * @param {ListNode}    head    head of the linked list
 * @return {boolean}            whether palindrome or not
 */
const isPalindrome = function(head) {
  // locate the middle node
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  if (fast) {
    slow = slow.next;
  }

  // reverse the 2nd half of the list (middle to tail becomes tail to middle)
  let rev = null;
  while (slow) {
    const next = slow.next;
    slow.next = rev;
    rev = slow;
    slow = next;
  }

  // compare the 1st half and the reversed 2nd half
  while (rev && head.val === rev.val) {
    head = head.next;
    rev = rev.next;
  }
  return !rev;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0234 - Palindrome Linked List:');
  [
    [1, 2],
    [1, 2, 2, 1],
  ].forEach( vs => {
    const list = array2list(vs);
    console.log(`  list=${printList(list)}, palindrome=${isPalindrome(list)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
