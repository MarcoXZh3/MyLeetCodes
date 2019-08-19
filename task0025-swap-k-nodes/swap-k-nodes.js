const { ListNode, array2list, printList } = require('../_utils/list');


/**
 * @param {ListNode}    head    head of the list
 * @param {number}      k       number of nodes to swap
 * @return {ListNode}           head of the swapped list
 */
const reverseKGroup = function(head, k) {
  // k being 1 means not to reverse
  if (k === 1) {
    return head;
  }

  // append a dummy head
  const dummy = new ListNode(null);
  dummy.next = head;

  // loop every k-groups
  let tail0 = dummy;
  while (true) {
    // verify at least k nodes left, because will not swap if not long enough
    let head = tail0.next;
    for (let i = 0; i < k; i++) {
      // no more nodes available, don't swap, and return list after dummy head
      if (!head) {
        return dummy.next;
      }
      head = head.next;
    }

    // for the k-group, swap it
    head = tail0.next;
    let tail1 = head;       // the head will become the new tail
    let next = head.next;
    for (let i = 0; i < k - 1; i++) {     // k nodes need to swap k-1 times
      const rest = next.next;
      next.next = head;     // reverse 1: move head after next
      head = next;          // reverse 2: keep head always head
      next = rest;          // prepare for next reverse: move next forward
    }

    // after the k-group swapped, connect it back to list
    tail0.next = head;      // relink 1: previous tail links to head
    tail0 = tail1;          // relink 2: update previous tail to latest
    tail0.next = next;      // relink 3: new tail links to rest of the list
  }
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0025 - Reverse Nodes in k-Group:');
  [
    [ [1, 2, 3, 4, 5], 2],
    [ [1, 2, 3, 4, 5], 3],
  ].forEach( vs => {
    const list = array2list(vs[0]);
    console.log(`  list=${printList(list)}, n=${vs[1]}`);
    console.log(`  swap=${printList(reverseKGroup(list, vs[1]))}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
