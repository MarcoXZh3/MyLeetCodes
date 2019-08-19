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
   * parse left and right child
   */
  let children = [];
  if (l && l.constructor.name === [].constructor.name) {
    children = l;
  } else if (l && l.constructor === this.constructor) {
    children = [l, r];
  }


  /**
   * inherits basic tree node
   */
  TreeNode.call(this, val, p, children);

  /**
   * left child
   */
  this.left = children[0];

  /**
   * right child
   */
  this.right = children[1];
};
