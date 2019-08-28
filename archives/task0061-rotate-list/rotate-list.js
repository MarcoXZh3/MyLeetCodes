const path = require('path');
const { ListNode, array2list, printList } = require(path.resolve('_utils/list'));


/**
 * @param {ListNode}    head    head of the original list
 * @param {number}      k       number of rotates
 * @return {ListNode}           head of the rotated list
 */
const rotateRight = function(head, k) {
  if (!head) {
    return head;
  }

  // count length of the list
  let n = 1;
  let tail = head;
  while (tail.next) {
    n++;
    tail = tail.next;
  }

  // locate the new tail
  k = n - (k % n);
  let tail2 = head;
  while (--k > 0) {
    tail2 = tail2.next;
  }

  // break the list after the new tail and swap the two parts
  tail.next = head;
  head = tail2.next;
  tail2.next = null;
  return head;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0061 - Rotate List:');
  [
    [[1, 2, 3, 4, 5], 2],
    [[0, 1, 2], 4],
  ].forEach( vs => {
    const list = array2list(vs[0]);
    console.log(`  lst=${printList(list)}; rotate=${printList(rotateRight(list, vs[1]))}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
