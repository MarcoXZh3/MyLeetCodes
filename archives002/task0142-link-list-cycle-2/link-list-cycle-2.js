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
 * Hash map: O(n) on space
 * @param {ListNode}    head    head of the linked list
 * @return {ListNode}           the node where circle begins
 */
const detectCycle0 = function(head) {
  const nodes = new Set();
  let target = null;
  let cur = head;
  while (cur) {
    if (nodes.has(cur)) {
      target = cur;
      break ;
    }
    nodes.add(cur);
    cur = cur.next;
  }
  return target;
};


/**
 * Two pointers: O(1) on space
 * @param {ListNode}    head    head of the linked list
 * @return {ListNode}           the node where circle begins
 */
const detectCycle = function(head) {
  if (!head || !head.next) {
    return null;
  }

  let node1 = head;
  let node2 = head;
  while (node2.next && node2.next.next) {
    node1 = node1.next;
    node2 = node2.next.next;
    if (node1 === node2) {
      node2 = head;
      while (node1 !== node2) {
        node1 = node1.next;
        node2 = node2.next;
      }
      return node1;
    }
  }
  return null;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0142 - Linked List Cycle II:');
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
    const begin = detectCycle(list);
    console.log(`  start=${begin?begin.val:null}, list=${str}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
