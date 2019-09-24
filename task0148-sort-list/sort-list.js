const path = require('path');
const { ListNode, array2list, printList } = require(path.resolve('_utils/list'));


/**
 * merge sort with O(n log n)
 * @param {ListNode}    head    head node of the original list
 * @return {ListNode}           the sorted list's head
 */
const sortList = function(head) {
  /**
   * recursion of splitting and merging
   * @param {ListNode}    head    head node of the list to be merge-sorted
   * @returns {ListNode}          head of the sorted list
   */
  const recursion = (list) => {
    if (!list || !list.next) {
      return list;
    }
    // cut list half
    let prev = null;
    let slow = list;
    let fast = list;
    while (fast && fast.next) {
      prev = slow;
      slow = slow.next;
      fast = fast.next.next;
    }
    prev.next = null;
    // sort each half
    const l1 = recursion(list);
    const l2 = recursion(slow);
    // merge the two half-lists
    return merge(l1, l2);
  };

  /**
   * merge two lists
   * @param {ListNode}    l1      head of the 1st list
   * @param {ListNode}    l2      head of the 2nd list
   * @returns {ListNode}          head of the merged list
   */
  const merge = (l1, l2) => {
    const dummy = new ListNode(null);
    let p = dummy;
    while (l1 && l2) {
      if (l1.val < l2.val) {
        p.next = l1;
        l1 = l1.next;
      } else {
        p.next = l2;
        l2 = l2.next;
      }
      p = p.next;
    }
    p.next = l1 || l2;
    return dummy.next;
  };

  // merge sort the entire list from its head
  return recursion(head);
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0148 - Sort List:');
  [
    [4, 2, 1, 3],
    [-1, 5, 3, 4, 0],
  ].forEach( vs => {
    const list = array2list(vs);
    console.log(`  list=${printList(list)}`);
    console.log(`  sort=${printList(sortList(list))}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
