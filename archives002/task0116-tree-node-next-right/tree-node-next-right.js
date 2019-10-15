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
 * basic recursion: a rightmost node's next is the leftmost node (in the same
 * level) of the next sub tree
 * @param {Node}    root    root of the binary tree
 * @return {Node}           root of the modified tree
 */
const connect0 = function(root) {
  /**
   * @param {Node}    root      root node of the current sub-tree
   * @param {Node}    parent    parent of the root node
   * @param {number}  depth     depth of root in the sub-tree where root's right
   *                            child is the rightmost leaf
   */
  const recursion = (root, parent, depth) => {
    if (!root.left || !root.right) {
      return ;
    }
    root.left.next = root.right;  // left child's next: simply link to right child
    if (parent) {                 // right child's next: leftmost node in the same
      let cur = parent.right;     // level of parent's right sub-tree
      let cnt = 1;
      while (cnt++ <= depth) {
        cur = cur.left;
      }
      root.right.next = cur.left;
    }
    recursion(root.left, root, 0);  // move left: root becomes parent; depth remains 0
    recursion(root.right, parent, depth + 1); // move right: parent unchanged; depth grows 1
  };

  if (root) {
    recursion(root, null, 0);
  }
  return root;
};


/**
 * modified recursion: use
 * @param {Node}    root    root of the binary tree
 * @return {Node}           root of the modified tree
 */
const connect = function(root) {
  const recursion = (root) => {
    if (!root) {
      return ;
    }
    if (root.left) {
      root.left.next = root.right;
      if (root.next) {
        root.right.next = root.next.left;
      }
    }
    recursion(root.left);
    recursion(root.right);
  };

  recursion(root);
  return root;
};


/**
 * iteration: build a linked list from nodes of the current level, based on the
 * built upper level link list -- heads of the lists are the leftmost nodes
 * @param {Node}    root    root of the binary tree
 * @return {Node}           root of the modified tree
 */
const connect2 = function(root) {
  if (root) {
    let head = root;
    let cur = null;
    while (head.left) {
      cur = head;
      while (cur) {
        cur.left.next = cur.right;
        if (cur.next) {
          cur.right.next = cur.next.left;
        }
        cur = cur.next;
      }
      head = head.left;
    }
  }
  return root;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0116 - Populating Next Right Pointers in Each Node:');
  [
    [1, 2, 3, 4, 5, 6, 7],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
     22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
  ].forEach( vs => {
    const printf = (node) => `${node.val}(${node.next?node.next.val:'NULL'})`;
    const tree = arrToBinTree(vs);
    const lines0 = tree.toString().split('\n');
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
