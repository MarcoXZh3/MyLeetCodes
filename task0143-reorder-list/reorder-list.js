const path = require('path');
const { ListNode, array2list, printList } = require(path.resolve('_utils/list'));


/**
 * @param {ListNode}    head    head of the linked list
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = function(head) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0143 - Reorder List:');
  [
    [1, 2, 3, 4],
    [1, 2, 3, 4, 5],
  ].forEach( vs => {
    const list = array2list(vs);
    console.log(`  old=${printList(list)}`);
    reorderList(list);
    console.log(`  new=${printList(list)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
