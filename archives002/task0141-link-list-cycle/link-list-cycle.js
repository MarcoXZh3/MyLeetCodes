const path = require('path');
const { ListNode, array2list, printList } = require(path.resolve('_utils/list'));


/**
 * Apply circle by link tail to the given node
 * @param {ListNode}    head    head of the linked list
 * @param {number}      pos     index of node the tail links to
 */
const applyCycle = function (head, pos) {
  if (!head || pos < 0) {
    return ;
  }
  let target = null;
  while (head.next) {
    if (pos-- === 0) {
      target = head;
    }
    head = head.next;
  }
  head.next = target;
};


/**
 * Hash set: O(n) on space
 * @param {ListNode}    head    head of the linked list
 * @return {boolean}            whether the list has circle or not
 */
const hasCycle0 = function(head) {
  if (!head) {
    return false;
  }
  const nodes = new Set();
  let cur = head.next;
  while (cur) {
    if (nodes.has(cur)) {
      return true;
    }
    nodes.add(cur);
    cur = cur.next;
  }
  return false;
};


/**
 * Hash set: O(1) on space
 * @param {ListNode}    head    head of the linked list
 * @return {boolean}            whether the list has circle or not
 */
const hasCycle = function(head) {
  if (!head || !head.next) {
    return false;
  }
  let slow = head;
  let fast = head.next;
  while (slow !== fast) {
    if (!fast || !fast.next) {
      return false;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0141 - Linked List Cycle:');
  [
    [[3, 2, 0, -4], 1],
    [[1, 2], 0],
    [[1], -1],
  ].forEach( vs => {
    const list = array2list(vs[0]);
    let str = printList(list);
    applyCycle(list, vs[1]);
    if (vs[1] >= 0) {
      let cur = list;
      while (cur && vs[1]-- > 0) {
        cur = cur.next;
      }
      str += cur ? `{->${cur.val}}` : '';
    }
    console.log(`  cycle=${hasCycle(list)}, list=${str}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
