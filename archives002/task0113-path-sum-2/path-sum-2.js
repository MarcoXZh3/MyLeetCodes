const path = require('path');
const { BinaryTreeNode, arrToBinTree } = require(path.resolve('_utils/binary-tree'));
const TreeNode = BinaryTreeNode;


/**
 * @param {TreeNode}  root    root node of the tree
 * @param {number}    sum     the target sum
 * @return {number[][]}       all the solutions
 */
const pathSum = function(root, sum) {
  const backtrack = (root, sum, res, cur) => {
    cur.push(root.val);
    if (!root.left && !root.right) {
      let total = 0;
      for (let v of cur) {
        total += v;
      }
      if (total === sum) {
        res.push(JSON.parse(JSON.stringify(cur)));
      }
    }
    if (root.left) {
      backtrack(root.left, sum, res, cur);
    }
    if (root.right) {
      backtrack(root.right, sum, res, cur);
    }
    cur.pop();
  };
  const res = [];
  if (root) {
    backtrack(root, sum, res, []);
  }
  return res;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0113 - Path Sum II:');
  [
    [[5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, null, 5, 1], 22],
  ].forEach( vs => {
    const tree = arrToBinTree(vs[0]);
    console.log(tree.toString());
    console.log(`  sum=${vs[1]}, paths=${`[${pathSum(tree.root, vs[1]).map(p=>`[${p.join(',')}]`).join(', ')}]`}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
