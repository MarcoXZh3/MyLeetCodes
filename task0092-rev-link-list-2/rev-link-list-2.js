const { ListNode, array2list, printList } = require('../_utils/list');


/**
 * @param {ListNode}    head    head of the list to be reversed
 * @param {number}      m       index of the starting node
 * @param {number}      n       index of the ending node
 * @return {ListNode}           head of the reversed list
 */
const reverseBetween = function(head, m, n) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0092 - Reverse Linked List II:');
  [
    [[1, 2, 3, 4, 5], 2, 4],
  ].forEach( vs => {
    const list1 = array2list(vs[0]);
    const list2 = reverseBetween(list1, vs[1], vs[2]);
    console.log(`  list=${printList(list1)}, rev=${printList(list2)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
