const path = require('path');
const { ListNode, array2list, printList } = require(path.resolve('_utils/list'));


/**
 * @param {ListNode}  head    the head of the list
 * @param {number}    x       the value for partition
 * @return {ListNode}         the head of the list after partition
 */
const partition = function(head, x) {
  const dummy1 = new ListNode(null);
  const dummy2 = new ListNode(null);
  let cur1 = dummy1;
  let cur2 = dummy2;
  while (head) {
    if (head.val < x) {
      cur1.next = head;
      cur1 = cur1.next;
    } else {
      cur2.next = head;
      cur2 = cur2.next;
    }
    head = head.next;
  }
  cur1.next = dummy2.next;
  cur2.next = null;
  return dummy1.next;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0086 - Partition List:');
  [
    [[1, 4, 3, 2, 5, 2], 3],
  ].forEach( vs => {
    const list = array2list(vs[0]);
    console.log(`  list1=${printList(list)}`);
    console.log(`  list2=${printList(partition(list, vs[1]))}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
