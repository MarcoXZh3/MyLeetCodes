/**
 * Singly-linked list
 * @param {integer}   val     val of the node in the list
 * @param {ListNode}  next    next node in the list
 */
function ListNode(val, next) {
  this.val = val;
  this.next = next;
};


/**
 * @param {ListNode}    head    head of the original list
 * @param {number}      k       number of rotates
 * @return {ListNode}           head of the rotated list
 */
const rotateRight = function(head, k) {
  return head;
};


/**
 * Print the singly-linked list
 * @param {ListNode}  head    first node of the list
 */
const printList = (head) => {
  let arr = [head.val];
  while (head.next) {
    head = head.next;
    arr.push(head.val);
  }
  return arr.join('->');
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
    let head = new ListNode(vs[0][0]);
    const list = head;
    for (let i = 1; i < vs[0].length; i++) {
      head.next = new ListNode(vs[0][i]);
      head = head.next;
    }
    console.log(`  lst=${printList(list)}; rotate=${printList(rotateRight(list, vs[1]))}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
