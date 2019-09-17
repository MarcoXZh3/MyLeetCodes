const path = require('path');
const { ListNode, array2list, printList } = require(path.resolve('_utils/list'));


/**
 * the modified binary tree node
 * @param {object}  val     value of the node
 * @param {Node}    next    pointer to the next node
 * @param {Node}    random  pointer to a random node
 */
const Node = function(val, next, random) {
  /**
   * inherits basic binary tree node
   */
  ListNode.call(this, val, next);
  /**
   * the next node on the right
   */
  this.random = random;
};


/**
 * create a list out of an array
 * @param {object[]}    vals      the number array
 * @returns {Node}                the head of the created list
 */
const array2RandomList = function(vals) {
  const head = array2list(vals.map( vs=>vs[0] ));
  const nodes = [];
  let cur = head;
  while (cur) {
    nodes.push(cur);
    cur = cur.next;
  }
  for (let i = 0; i < vals.length; i++) {
    nodes[i].random = nodes[vals[i][1]];
  }
  return head;
};


/**
 * @param {Node}    head    head of the list
 * @return {Node}           head of the the deep-copied list
 */
const copyRandomList = function(head) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0138 - Copy List with Random Pointer:');
  [
    [ [1, 1], [2, 1] ],
  ].forEach( vs => {
    const toString = (n) => n?`${n.val}{${n.random?n.random.val:'NULL'}}`:`{NULL}`;
    const list = array2RandomList(vs);
    console.log(`  list: ${printList(list, toString)}`);
    console.log(`  copy: ${printList(copyRandomList(list), toString)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
