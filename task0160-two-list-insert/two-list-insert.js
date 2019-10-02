const path = require('path');
const { ListNode, array2list, printList } = require(path.resolve('_utils/list'));


/**
 * @param {ListNode}    headA     head of the 1st linked list
 * @param {ListNode}    headB     head of the 2nd linked list
 * @return {ListNode}             the node where the intersection starts
 */
const getIntersectionNode = function(headA, headB) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0160 - Intersection of Two Linked Lists:');
  [
    [8, 2, 3, [4, 1, 8, 4, 5], [5, 0, 1, 8, 4, 5]],
    [2, 3, 1, [0, 9, 1, 2, 4], [3, 2, 4]],
    [0, 3, 2, [2, 6, 4], [1, 5]],
  ].forEach( vs => {
    const list1 = array2list(vs[3]);
    const list2 = array2list(vs[4]);
    // intersect the two lists
    if (vs[0] !== 0) {
      let cur1 = list1;
      let cur2 = list2;
      while (-- vs[1] > 0) {
        cur1 = cur1.next;
      }
      while (-- vs[2] >= 0) {
        cur2 = cur2.next;
      }
      cur1.next = cur2;
    }
    const node = getIntersectionNode(list1, list2);
    console.log(`  its=${node&&node.val}, listA=${printList(list1)}, listB=${printList(list2)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
