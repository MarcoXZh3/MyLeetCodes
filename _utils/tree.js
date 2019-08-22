/**
 * tree node
 * @param {object}      val   val of the node in the list
 * @param {TreeNode}    p     (optional) parent of the node
 * @param {TreeNode[]}  cs    (optional) children of the node in the list
 */
const TreeNode = module.exports.TreeNode = function(val, p, cs) {
  /**
   * value of the node
   */
  this.val = val;

  /**
   * parent of the node
   */
  this.parent = p;

  /**
   * children of the node
   */
  this.children = cs || [];
};


/**
 * binary tree node
 * @param {object}      val       val of the node in the list
 * @param {TreeNode}    p         (optional) parent of the node
 * @param {TreeNode}    l         (optional) left child of the node
 * @param {TreeNode}    r         (optional) right child of the node
 */
const BinaryTreeNode = module.exports.BinaryTreeNode = function(val, p, l, r) {
  /**
   * value of the node
   */
  this.val = val;

  /**
   * parent of the node
   */
  this.parent = p;

  /**
   * left child
   */
  this.left = l;

  /**
   * right child
   */
  this.right = r;
};


/**
 * create a tree out of an array representing a complete binary tree
 * @param {object[]}          vals      the number array
 * @returns {BinaryTreeNode}            the root of the tree
 */
module.exports.array2bintree = function(vals) {
  if (!vals || vals.length === 0) {
    return null;
  }

  const root = new BinaryTreeNode(vals[0]);
  const nodes = [root];   // the node array mapping to the number array vals
  for (let i = 1; i < vals.length; i++) {
    if (vals[i] === null) {
      nodes.push(null);
      continue ;
    }
    const p = Math.floor((i - 1) / 2);
    const node = new BinaryTreeNode(vals[i]);
    if (p * 2 + 1 === i) {
      nodes[p].left = node;
    } else {
      nodes[p].right = node;
    }
    nodes.push(node);
  }
  return root;
};


/**
 * Print the tree in console
 * @param {TreeNode}  root    root of the tree
 * @returns {string}          the string representation of the tree
 */
module.exports.printTree = function(root) {
  if (!root) {
    return '{NULL}';
  }
  return '';
};
