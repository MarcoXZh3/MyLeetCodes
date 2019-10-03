const path = require('path');
const { BinaryTreeNode, array2bintree, printTree } = require(path.resolve('_utils/tree'));
const TreeNode = BinaryTreeNode;


/**
 * the binary search tree iterator
 * @param {TreeNode}  root    root of the binary search tree
 */
const BSTIterator = function(root) {

  /**
   * @return {number}     the next smallest number
   */
  this.next = () => {

  };

  /**
   * @return {boolean}    whether we have a next smallest number
   */
  this.hasNext = () => {

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
