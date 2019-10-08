const path = require('path');
const { BinaryTreeNode, array2bintree, printTree } = require(path.resolve('_utils/tree'));
const TreeNode = BinaryTreeNode;


/**
 * recursion with pre-order traversal
 * @param {TreeNode}      root    root of the tree
 * @return {number[][]}           tree node values by level
 */
const zigzagLevelOrder0 = function(root) {
  const recursion = (root, level, res) => {
    if (!root) {
      return ;
    }
    if (level >= res.length) {
      res.push([]);
    }
    if (level % 2 === 1) {
      res[level].unshift(root.val);
    } else {
      res[level].push(root.val);
    }
    recursion(root.left, level + 1, res);
    recursion(root.right, level + 1, res);
  };
  const res = [];
  recursion(root, 0, res);
  return res;
};


/**
 * iteration with queue
 * @param {TreeNode}      root    root of the tree
 * @return {number[][]}           tree node values by level
 */
const zigzagLevelOrder = function(root) {
  const res = [];
  if (!root) {
    return res;
  }
  const queue = [root];
  let direction = false;
  while (queue.length > 0) {
    direction = !direction;
    const level = queue.length;
    const vals = [];
    for (let i = 0; i < level; i++) {
      if (queue[queue.length - 1].left) {
        queue.unshift(queue[queue.length - 1].left);
      }
      if (queue[queue.length - 1].right) {
        queue.unshift(queue[queue.length - 1].right);
      }
      if (direction) {
        vals.push(queue.pop().val);
      } else {
        vals.unshift(queue.pop().val);
      }
    }
    res.push(vals);
  }
  return res;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0103 - Binary Tree Zigzag Level Order Traversal:');
  [
    [3, 9, 20, null, null, 15, 7],
    [1, 2, 3, 4, null, null, 5],
  ].forEach( vs => {
    const root = array2bintree(vs);
    console.log(printTree(root));
    console.log(`  breadth-first=[${zigzagLevelOrder(root).map( xs=>`[${xs.join(',')}]`).join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
