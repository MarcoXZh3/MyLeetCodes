const path = require('path');
const { BinaryTree, arrToBinTree } = require(path.resolve('_utils/binary-tree'));


/**
 * Encodes a tree to a single string
 * @param {TreeNode}  root    root node of the binary tree
 * @return {string}           the serialized string
 */
const serialize = function(root) {

};


/**
 * Decodes your encoded data to tree.
 * @param {string}    data    the serialized tree
 * @return {TreeNode}         the deserialized tree node
 */
const deserialize = function(data) {

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
