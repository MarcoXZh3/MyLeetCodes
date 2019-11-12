const path = require('path');
const { BinaryTreeNode, BinaryTree, arrToBinTree } = require(path.resolve('_utils/trees/binary-tree'));
const TreeNode = BinaryTreeNode;


/**
 * binary tree <-> complete tree <-> to array
 * NOT COMPATIBLE LeetCode SERIALIZATION so not passed
 * @param {TreeNode}  root    root node of the binary tree
 * @return {string}           the serialized string
 */
const serialize0 = function(root) {
  const recursion = (node, idx) => {
    if (!node) {
      return ;
    }
    if (arr.length < idx + 1) {
      arr.push(...[Array(idx + 1 - arr.length).keys()].map( _=>null ));
    }
    arr[idx] = node.val;
    recursion(node.right, idx * 2 + 2);
    recursion(node.left, idx * 2 + 1);
  };
  const arr = [];
  recursion(root, 0);
  return JSON.stringify(arr);
};
/**
 * binary tree <-> complete tree <-> to array
 * NOT COMPATIBLE LeetCode SERIALIZATION so not passed
 * @param {string}    data    the serialized tree
 * @return {TreeNode}         the deserialized tree node
 */
const deserialize0 = function(data) {
  // return arrToBinTree(JSON.parse(data)).root;
  const arr = JSON.parse(data);
  if (!arr || arr.length === 0) {
    return null;
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === null) {
      continue ;
    }
    arr[i] = arr[i] instanceof TreeNode ? arr[i] : new TreeNode(arr[i]);
    let c = i * 2 + 1;
    if (c < arr.length) {
      arr[i].left = arr[c];
    }
    c ++;
    if (c < arr.length) {
      arr[i].right = arr[c];
    }
  }
  return arr[0];
};


/**
 * LeetCode version of BFS serialization
 * @param {TreeNode}  root    root node of the binary tree
 * @return {string}           the serialized string
 */
const serialize1 = function(root) {
  const queue = [root];
  const re = [];
  while (queue.filter( x=>x ).length > 0) {
    const node = queue.shift();
    re.push(node && node.val);
    if (node) {
      queue.push(node.left || null, node.right || null);
    }
  }
  return JSON.stringify(re);
};
/**
 * LeetCode version of BFS serialization
 * @param {string}    data    the serialized tree
 * @return {TreeNode}         the deserialized tree node
 */
const deserialize1 = function(data) {
  data = JSON.parse(data);
  if (!data || data.length === 0) {
    return null;
  }
  const root = new TreeNode(data.shift());
  const queue = [root];
  while (true) {
    const node = queue.shift();
    if (data.length === 0) {
      break ;
    }
    let val = data.shift();
    if (val !== null) {
      queue.push(node.left = new TreeNode(val));
    }
    if (data.length === 0) {
      break ;
    }
    val = data.shift();
    if (val !== null) {
      queue.push(node.right = new TreeNode(val));
    }
  }
  return root;
};


/**
 * nested object
 * @param {TreeNode}  root    root node of the binary tree
 * @return {string}           the serialized string
 */
const serialize = function(root) {
  const recursion = (node) => {
    return node ? {
      v: node.val,
      l: recursion(node.left),
      r: recursion(node.right),
    } : null;
  };
  return JSON.stringify(recursion(root));
};
/**
 * nested object
 * @param {string}    data    the serialized tree
 * @return {TreeNode}         the deserialized tree node
 */
const deserialize = function(data) {
  const recursion = (data) => {
    if (!data) {
      return null;
    }
    const node = new TreeNode(data.v);
    node.left = recursion(data.l);
    node.right = recursion(data.r);
    return node;
  };
  return recursion(JSON.parse(data));
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0296 - Best Meeting Point:');
  [
    [1, 2, 3, null, null, 4, 5],
  ].forEach( vs => {
    const tree0 = arrToBinTree(vs);
    const str = serialize(tree0.root);
    const tree1 = new BinaryTree(deserialize(str));
    const lines0 = tree0.toString().split('\n');
    const lines1 = tree1.toString().split('\n');
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
    console.log(`  str="${str}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
