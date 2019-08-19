const { ListNode, array2list, printList } = require('../_utils/list');


/**
 * @param {ListNode}  head    first node of the list
 * @return {ListNode}         head of the list after removing duplications
 */
const deleteDuplicates = function(head) {
  const fake = new ListNode(null);
  fake.next = head;

  let tail = fake;     // last node in the non-duplicated list
  let cur = tail.next;
  let dup = false;      // flag to check whether cur is duplicated or not
  while (cur && cur.next) {
    if (cur.val === cur.next.val) {   // cur is duplicated: set flag
      dup = true;
    } else if (dup) {                 // cur is the last duplication
      tail.next = cur.next;           // connect tail to tails next
      dup = false;
    } else {                          // cur is not duplicated: becomes new tail
      tail = cur;
    }
    cur = cur.next;
  }
  if (dup) {                          // all trailing nodes are duplicated
    tail.next = null;
  }
  return fake.next;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0082 - Remove Duplicates from Sorted List II:');
  [
    [1, 2, 3, 3, 4, 4, 5],
    [1, 1, 1, 2, 3],
  ].forEach( vs => {
    const list = array2list(vs);
    console.log(`  lst=${printList(list)}; rmvd=${printList(deleteDuplicates(list))}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
