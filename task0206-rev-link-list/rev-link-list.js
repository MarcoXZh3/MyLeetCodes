const { ListNode, array2list, printList } = require('../_utils/list');


/**
 * @param {ListNode}    head    head of the singly linked list
 * @return {ListNode}           head of the reversed singly linked list
 */
const reverseList = function(head) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0206 - Reverse Linked List:');
  [
    [1, 2, 3, 4, 5],
  ].forEach( vs => {
    const list = array2list(vs);
    console.log(`  list=${printList(list)}, rev=${reverseList(list)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
