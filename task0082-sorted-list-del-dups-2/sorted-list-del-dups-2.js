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
 * @param {ListNode}  head    first node of the list
 * @return {ListNode}         head of the list after removing duplications
 */
const deleteDuplicates = function(head) {

};


/**
 * Print the singly-linked list
 * @param {ListNode}  head    first node of the list
 * @returns {string}          the string representation of the list
 */
const printList = (head) => {
  if (!head) {
    return '';
  }

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
  console.log('Task 0082 - Remove Duplicates from Sorted List II:');
  [
    [1, 2, 3, 3, 4, 4, 5],
    [1, 1, 1, 2, 3],
  ].forEach( vs => {
    let head = new ListNode(vs[0]);
    const list = head;
    for (let i = 1; i < vs.length; i++) {
      head.next = new ListNode(vs[i]);
      head = head.next;
    }
    console.log(`  lst=${printList(list)}; rmvd=${printList(deleteDuplicates(list))}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
