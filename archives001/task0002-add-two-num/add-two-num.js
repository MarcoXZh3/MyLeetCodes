const path = require('path');
const { ListNode, array2list, printList } = require(path.resolve('_utils/list'));


/**
 * Add two nums:
 * @param {ListNode}  l1      the first list
 * @param {ListNode}  l2      the second list
 * @return {ListNode}         the sum of the two lists
 */
const addTwoNumbers = (l1, l2) => {
  const re = new ListNode(0);
  let cur = re;
  // repeat whenever there is at least 1 number
  while (l1 || l2) {
    let num1 = l1 ? l1.val : 0;   // if current number not available, set 0
    let num2 = l2 ? l2.val : 0;
    l1 = l1 ? l1.next : null;     // move next, null if already not available
    l2 = l2 ? l2.next : null;
    const sum = cur.val + num1 + num2;  // summation
    cur.val = sum % 10;                 // remainder as the current value
    // move next only if carry or at least 1 next available
    if (l1 || l2 || sum > 9) {
      cur.next = new ListNode(sum > 9 ? 1 : 0); // set carry as the init value
      cur = cur.next;
    }
  }
  return re;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0002 - Add Two Numbers:');
  [
    [
      [2, 4, 3], [5, 6, 8, 2],
    ],
  ].forEach( vs => {
    const l1 = array2list(vs[0]);
    const l2 = array2list(vs[1]);
    console.log(`  ${printList(l1)}`);
    console.log(`+ ${printList(l2)}`);
    console.log(`= ${printList(addTwoNumbers(l1, l2))}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
