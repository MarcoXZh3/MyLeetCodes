const path = require('path');
const { BinaryTreeNode, BinaryTree } = require(path.resolve('_utils/trees/binary-tree'));


/**
 * binary search tree
 * @param {BinaryTreeNode}    root        root of the binary tree
 * @param {function}          compare     the custom comparison logic
 *          @param {BinaryTreeNode}   a       the 1st element
 *          @param {BinaryTreeNode}   b       the 2nd element
 *          @returns {number}                 1 if a > b; -1 if a < b; 0 if a === b
 */
const BinarySearchTree = module.exports.BinarySearchTree = function(root, compare) {
  /**
   * inherits from binary search tree
   */
  BinaryTree.call(this, root);
  if (!compare) {
    compare = (a, b) => a.val === b.val ? 0 : (a.val > b.val ? 1 : -1);
  }


  /**
   * insert the given node into the correct position
   * @param {object}          target      the target to insert
   */
  this.insert = (target) => {
    target = target instanceof BinaryTreeNode ? target : new BinaryTreeNode(target);
    if (!this.root) {
      this.root = target;
      return ;
    }
    let cur = this.root;
    while (cur) {
      const re = compare(target, cur);
      if (re === 0) {
        return ;
      } else if (re < 0) {
        cur.left ? cur = cur.left : cur.left = target;
      } else {
        cur.right ? cur = cur.right : cur.right = target;
      }
    }
    cur = target;
  }


  /**
   * remove the given node from the tree
   * @param {object}          target      the target to remove
   * @returns {BinaryTreeNode}            the removed node or null
   */
  this.remove = (target) => {
    target = target instanceof BinaryTreeNode ? target : new BinaryTreeNode(target);
    // find the target node first
    let cur = this.root;
    let parent = null;
    while (cur) {
      const re = compare(target, cur);
      if (re !== 0) {
        parent = cur;
        cur = re < 0 ? cur.left : cur.right;
        continue ;
      }

      // found the matching target
      if (cur.left && cur.right) {
        // if target has two children, swap it with its in-order successor
        let next = cur.right;
        parent = cur;
        while (next.left) {
          parent = next;
          next = next.left;
        }
        const tmp = cur.val;
        cur.val = next.val;
        next.val = tmp;
        cur = next;
      }
      // now target will have at most 1 child -- link its child to its parent
      let child = cur.right || cur.left;
      if (!parent) {
        this.root = child;
      } else if (parent.left === cur) {
        parent.left = child;
      } else {
        parent.right = child;
      }
      return cur;
    }
    return null;
  };


  /**
   * find the node in the tree matching the given target.
   * overwriting the binary tree version
   * @param {object}      target    the target to look for
   * @returns {BinTreeNode}         the matching tree node
   */
  this.search = (target) => {
    target = target instanceof BinaryTreeNode ? target : new BinaryTreeNode(target);
    let cur = this.root;
    while (cur) {
      const re = compare(target, cur);
      if (re === 0) {
        return cur;
      }
      cur = re < 0 ? cur.left : cur.right;
    }
    return null;
  };

};


/**
 * main entry
 */
const main = module.exports.main = function() {
  const bst = new BinarySearchTree(null);
  const vals = [];
  for (let i = 0; i < 10; i++) {
    const val = Math.round(Math.random() * 100) - 50;
    vals.push(val);
    bst.insert(val);
    console.log(`insert(${i+1}): ${val} -- ${JSON.stringify(bst.inOrder().map(x=>x.val))}`);
    console.log(bst.toString());
  }

  while (vals.length > 0) {
    const i = Math.floor(Math.random() * vals.length);
    const val = vals[i];
    bst.remove(val);
    vals.splice(i, 1);
    console.log(`remove: ${val} -- ${JSON.stringify(bst.inOrder().map(x=>x.val))}`);
    console.log(bst.toString());
  }
};


// run the sorting
main();
