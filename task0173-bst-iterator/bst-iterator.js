const path = require('path');
const { BinaryTreeNode, array2bintree, printTree } = require(path.resolve('_utils/tree'));
const TreeNode = BinaryTreeNode;


/**
 * the binary search tree iterator - O(1) on time and O(n) on space
 * @param {TreeNode}  root    root of the binary search tree
 */
const BSTIterator0 = function(root) {
  const nodes = [];
  const recursion = (root) => {
    if (!root) {
      return ;
    }
    recursion(root.left);
    nodes.push(root);
    recursion(root.right);
  };
  recursion(root);
  /**
   * @return {number}     the next smallest number
   */
  this.next = () => {
    return nodes.shift().val;
  };
  /**
   * @return {boolean}    whether we have a next smallest number
   */
  this.hasNext = () => {
    return nodes.length > 0;
  };
};


/**
 * the binary search tree iterator - O(1) on time and O(h) on space
 * @param {TreeNode}  root    root of the binary search tree
 */
const BSTIterator = function(root) {
  const stack = [];
  const build = (root) => {
    while (root) {
      stack.push(root);
      root = root.left;
    }
  };
  build(root);
  /**
   * @return {number}     the next smallest number
   */
  this.next = () => {
    const cur = stack.pop();
    build(cur.right);
    return cur.val;
  };
  /**
   * @return {boolean}    whether we have a next smallest number
   */
  this.hasNext = () => {
    return stack.length > 0;
  };
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0173 - Binary Search Tree Iterator:');
  [
    [7, 3, 15, null, null, 9, 20],
  ].forEach( vs => {
    const tree = array2bintree(vs);
    const itr = new BSTIterator(tree);
    vs = [];
    while (itr.hasNext()) {
      vs.push(itr.next());
    }
    console.log(printTree(tree));
    console.log(`  itr={${vs.length}}[${vs.join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
