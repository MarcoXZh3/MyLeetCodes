const { ListNode, array2list, printList } = require('../_utils/list');


/**
 * @param {ListNode}  head    first node of the list
 * @return {ListNode}         head of the list after removing duplications
 */
const deleteDuplicates = function(head) {
  let cur = head;
  while (cur && cur.next) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return head;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0083 - Remove Duplicates from Sorted List:');
  [
    [1, 1, 2],
    [1, 1, 2, 3, 3],
    [1, 1, 1],
  ].forEach( vs => {
    const list = array2list(vs[0]);
    console.log(`  lst=${printList(list)}; rmvd=${printList(deleteDuplicates(list))}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
