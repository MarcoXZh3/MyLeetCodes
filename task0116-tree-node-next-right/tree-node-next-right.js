const path = require('path');
const { BinaryTreeNode, array2bintree, printTree } = require(path.resolve('_utils/tree'));


/**
 * the modified binary tree node
 * @param {object}  val   value of the node
 * @param {Node}    p     (optional) parent of the node
 * @param {Node}    l     (optional) left child of the node
 * @param {Node}    r     (optional) right child of the node
 * @param {Node}    n     (optional) next node on the right
 */
const Node = function(val, p, l, r, n) {
  /**
   * inherits basic binary tree node
   */
  BinaryTreeNode.call(this, val, p, l, r);
  /**
   * the next node on the right
   */
  this.next = n || null;
};


/**
 * @param {Node}    root    root of the binary tree
 * @return {Node}           root of the modified tree
 */
const connect = function(root) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0116 - Populating Next Right Pointers in Each Node:');
  [
    [1, 2, 3, 4, 5, 6, 7],
  ].forEach( vs => {
    const toString = (node) => `${node.val}(${node.next?node.next.val:'NULL'})`;
    const root = array2bintree(vs);
    const lines0 = printTree(root).split('\n');
    const lines1 = printTree(root, toString).split('\n');
    for (let i = 0; i < lines0.length; i++) {
      console.log(`  ${lines0[i]}     ${lines1[i] || ''}`);
    }
    let s = '';
    while (s.length < (lines0[0] || '').length) {
      s += ' ';
    }
    for (let i = lines0.length; i < lines1.length; i++) {
      console.log(`  ${s}     ${lines1[i] || ''}`);
    }
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
