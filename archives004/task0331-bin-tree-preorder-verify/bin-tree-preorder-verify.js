const path = require('path');
const { BinaryTreeNode, BinaryTree } = require(path.resolve('_utils/trees/binary-tree'));
const TreeNode = BinaryTreeNode;


/**
 * @param {string}      preorder    the serialization string
 * @return {boolean}                whether valid binary tree preorder or not
 */
const isValidSerialization0 = function(preorder) {
  if (preorder == null) {
    return false;
  }
  const stack = [];
  const arr = preorder.split(',');
  for (let cur of preorder.split(',')) {
    while (cur === '#' && stack.length > 0 && stack[stack.length - 1] === cur) {
      stack.pop();
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
    stack.push(cur);
  }
  return stack.length === 1 && stack[0] === '#';
};


/**
 * @param {string}      preorder    the serialization string
 * @return {boolean}                whether valid binary tree preorder or not
 */
const isValidSerialization = function(preorder) {
  let diff = 1;
  for (let cur of preorder.split(',')) {
    if (-- diff < 0) {
      return false;
    }
    if (cur !== '#') {
      diff += 2;
    }
  }
  return diff === 0;
};


/**
 * build a binary tree out of the preorder string, assuming valid representation
 * @param {string}      preorder    the serialization string
 * @return {TreeNode}               root node of the tree, or null if not valid
 */
const buildTree = function(preorder) {
  if (!preorder || !preorder.trim()) {
    return null;
  }
  const arr = preorder.split(',').map( v=>v.trim() ).map( v=>v==='#'?null:v );
  if (!arr[0]) {
    return null;
  }
  const root = new TreeNode(arr.shift());
  const stack = [[root, 0]];
  while (arr.length > 0) {
    const v = arr.shift();
    // console.log(JSON.stringify(stack.map(x=>[x[0].val, x[1]])), v);
    const [cur, children] = stack.pop();
    if (v) {
      const child = new TreeNode(v);
      if (children < 2) {
        children === 0 ? cur.left = child : cur.right = child;
        stack.push([cur, children + 1], [child, 0]);
      } else {
        let prev = null;
        let prevChildren = null;
        while (stack.length > 0) {
          const vs = stack.pop();
          if (vs[1] < 2) {
            [prev, prevChildren] = vs;
            break ;
          }
        }
        prev.right = child;
        stack.push([prev, prevChildren + 1], [child, 0]);
      }
    } else if (children + 1 < 2) {
      stack.push([cur, children + 1]);
    }
  }
  return root;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0331 - Verify Preorder Serialization of a Binary Tree:');
  [
    '9,3,4,#,#,1,#,#,2,#,6,#,#',
    '1,#',
    '9,#,#,1',
    '1,#',
    '#',
  ].forEach( v => {
    const valid = isValidSerialization(v);
    console.log(`  valid=${valid}, str=${JSON.stringify(v)}`);
    if (valid) {
      const tree = new BinaryTree(buildTree(v));
      console.log(tree.toString());
    }
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
