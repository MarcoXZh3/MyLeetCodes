const path = require('path');
const { ListNode, array2list, printList } = require(path.resolve('_utils/list'));


/**
 * recursion version
 * @param {ListNode}    head    head of the singly linked list
 * @return {ListNode}           head of the reversed singly linked list
 */
const reverseList0 = function(head) {
  /**
   * @param {ListNode}    head    head of the singly linked list
   * @return {ListNode}           head of the reversed singly linked list
   */
  const recursion = (head) => {
    // if single node -- the reversed version is itself
    if (!head.next) {
      return head;
    }
    // reverse the list starting from the 2nd node
    const list2 = recursion(head.next);
    // link the old head as the new tail
    head.next.next = head;
    head.next = null;
    return list2;
  };

  // reverse the entire list if available
  return !head ? null : recursion(head);
};


/**
 * @param {ListNode}    head    head of the singly linked list
 * @return {ListNode}           head of the reversed singly linked list
 */
const reverseList = function(head) {
  const dummy = new ListNode(null); // the fake head of the new list
  while (head) {
    const head2 = dummy.next;       // preserve the new list (real data part)
    dummy.next = head;              // link current node to fake head as new head
    head = head.next;               // move current node
    dummy.next.next = head2;        // reconnect new list to new head
  }
  return dummy.next;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0206 - Reverse Linked List:');
  [
    [1, 2, 3, 4, 5],
  ].forEach( vs => {
    const list = array2list(vs);
    console.log(`  list=${printList(list)}, rev=${printList(reverseList(list))}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
