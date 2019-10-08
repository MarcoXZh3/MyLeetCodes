const path = require('path');
const { BinaryTreeNode, array2bintree, printTree } = require(path.resolve('_utils/tree'));
const TreeNode = BinaryTreeNode;


/**
 * @param {TreeNode}    root    root node of the binary tree
 * @return {number[]}           the traversal results
 */
const rightSideView = function(root) {
  const recursion = (root, level, res) => {
    if (!root) {
      return ;
    }
    if (level < res.length) {
      res[level] = root.val;
    } else {
      res.push(root.val);
    }
    recursion(root.left, level + 1, res);
    recursion(root.right, level + 1, res);
  };
  const res = [];
  recursion(root, 0, res);
  return res;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0199 - Binary Tree Right Side View:');
  [
    [1, 2, 3, null, 5, null, 4],
    [1, 2],
    [1, 2, 3, 4],
  ].forEach( vs => {
    const root = array2bintree(vs);
    console.log(`right=[${rightSideView(root).join(', ')}]`);
    console.log(printTree(root));
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
