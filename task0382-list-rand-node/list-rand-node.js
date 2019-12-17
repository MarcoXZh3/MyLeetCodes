const path = require('path');
const { ListNode, array2list, printList } = require(path.resolve('_utils/list'));


/**
 * @param {ListNode}  head    the head node of the list, guaranteed to be not null
 */
const Solution = function(head) {
  /**
   * Returns a random node's value
   * @return {number}         the value of the random node
   */
  this.getRandom = () => {
  };
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0382 - Linked List Random Node:');
  [
    [1, 2, 3],
  ].forEach( vs => {
    const head = array2list(vs);
    const sol = new Solution(head);
    for (let i = 0; i < vs.length; i++) {
      console.log(`  rand=${sol.getRandom()}, list=${printList(head)}`);
    }
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
