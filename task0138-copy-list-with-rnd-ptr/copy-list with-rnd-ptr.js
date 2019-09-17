const path = require('path');
const { ListNode, printList } = require(path.resolve('_utils/list'));


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
 * @param {Node}    head    head of the list
 * @return {Node}           head of the the deep-copied list
 */
const copyRandomList = function(head) {

};


/**
 * create a list out of an array
 * @param {object[]}    vals      the number array
 * @returns {Node}                the head of the created list
 */
const array2RandomList = function(vals) {
  if (!vals || vals.length === 0) {
    return null;
  }
  const nodes = [];
  for (let vs of vals) {
    nodes.push(new Node(vs[0]));
  }
  for (let i = 0; i < nodes.length; i++) {
    nodes[i].next = nodes[vals[i][1]];
    nodes[i].random = nodes[vals[i][2]];
  }
  return nodes[0];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0138 - Copy List with Random Pointer:');
  [
    [ [1, 1, 1], [2, null, 1] ],
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
