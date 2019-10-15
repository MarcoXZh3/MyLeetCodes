const path = require('path');
const { BinaryTreeNode, arrToBinTree } = require(path.resolve('_utils/binary-tree'));


/**
 * the modified binary tree node
 * @param {object}  val   value of the node
 * @param {Node}    l     (optional) left child of the node
 * @param {Node}    r     (optional) right child of the node
 * @param {Node}    n     (optional) next node on the right
 */
const Node = function(val, l, r, n) {
  /**
   * inherits basic binary tree node
   */
  BinaryTreeNode.call(this, val, l, r);
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
  const root0 = root;
  let dummy = new Node(0);
  let prev = dummy;
  while (root) {
    if (root.left) {
      prev.next = root.left;
      prev = prev.next;
    }
    if (root.right) {
      prev.next = root.right;
      prev = prev.next;
    }
    root = root.next;
    if (!root) {
      prev = dummy;
      root = dummy.next;
      dummy.next = null;
    }
  }
  return root0;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0117 - Populating Next Right Pointers in Each Node II:');
  [
    [1, 2, 3, 4, 5, null, 7],
    [1, 2, 6, 3, 5, null, 7, 4, null, null, null, null, null, null, 8],
  ].forEach( vs => {
    const printf = (node) => `${node.val}(${node.next?node.next.val:'NULL'})`;
    const tree = arrToBinTree(vs);
    const lines0 = tree.toString(printf).split('\n');
    tree.root = connect(tree.root);
    const lines1 = tree.toString(printf).split('\n');
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
