const path = require('path');
const { ListNode, array2list, printList } = require(path.resolve('_utils/list'));


/**
 * @param {ListNode}    head    the linked list
 * @param {number}      val     value to be removed
 * @return {ListNode}           the updated linked list
 */
const removeElements = function(head, val) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0203 - Remove Linked List Elements:');
  [
    [6, [1, 2, 6, 3, 4, 5, 6]],
  ].forEach( vs => {
    const list = array2list(vs[1]);
    console.log(`  list=${printList(list)}, target=${vs[0]}`);
    removeElements(list, vs[0]);
    console.log(`  list=${printList(list)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
