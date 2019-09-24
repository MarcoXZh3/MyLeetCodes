const path = require('path');
const { ListNode, array2list, printList } = require(path.resolve('_utils/list'));


/**
 * @param {ListNode}    head    head node of the original list
 * @return {ListNode}           the sorted list's head
 */
const sortList = function(head) {
  return head;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0148 - Sort List:');
  [
    [4, 2, 1, 3],
    [-1, 5, 3, 4, 0],
  ].forEach( vs => {
    const list = array2list(vs);
    console.log(`  list=${printList(list)}`);
    console.log(`  sort=${printList(sortList(list))}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
