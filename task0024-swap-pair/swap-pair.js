const { ListNode, array2list, printList } = require('../_utils/list');


/**
 * @param {ListNode}    head    head of the list
 * @return {ListNode}           head of the swapped list
 */
const swapPairs = function(head) {
  // not enough nodes
  if (!head) {
    return null;
  } else if (!head.next) {
    return head;
  }

  // more than two nodes
  const head1 = head.next;    // new head
  let prev = null;            // init 1: previous node
  let cur = head;             // init 2: current node
  while (cur && cur.next) {
    let next = cur.next;      // init 3 / forward 3: next node, next to current
    if (prev) {
      prev.next = next;       // swap 1: if available prev links to next
    }
    cur.next = next.next;     // swap 2: current links to next pair
    next.next = cur;          // swap 3: next points to current
    prev = cur;               // forward 1: prev becomes current
    cur = cur.next;           // forward 2: current moves next
  }
  return head1;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0024 - Swap Nodes in Pairs:');
  [
    [1, 2, 3, 4],
  ].forEach( vs => {
    const list = array2list(vs);
    console.log(`  old=${printList(list)}`);
    console.log(`  swapped=${printList(swapPairs(list))}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
