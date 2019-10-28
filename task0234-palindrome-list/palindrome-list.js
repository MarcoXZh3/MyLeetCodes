const path = require('path');
const { ListNode, array2list, printList } = require(path.resolve('_utils/list'));


/**
 * @param {ListNode}    head    head of the linked list
 * @return {boolean}            whether palindrome or not
 */
const isPalindrome = function(head) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0234 - Palindrome Linked List:');
  [
    [1, 2],
    [1, 2, 2, 1],
  ].forEach( vs => {
    const list = array2list(vs);
    console.log(`  palindrome=${isPalindrome(list)}, list=${printList(list)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
