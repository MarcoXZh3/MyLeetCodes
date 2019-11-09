/**
 * tree node
 * @param {object}        val       val of the node in the list
 * @param {TreeNode[]}    children  (optional) child nodes of the tree node
 */
const TreeNode = module.exports.TreeNode = function(val, children) {
  /**
   * value of the node
   */
  this.val = val;
  /**
   * child nodes
   */
  this.children = children || [];
  /**
   * Print the binary tree node as string
   * @param {function}    printf  the custom function to print each node
   * @returns {string}            the string representation of the node
   */
  this.toString = (printf) => {
    return printf ? printf(this) : `${this.val}`;
  };
};


/**
 * tree
 * @param {TreeNode}      root       root of the tree
 */
module.exports.Tree = function(root) {
  this.root = root;


  /**
   * find the depth of the tree
   * @returns {number}              depth of the tree
   */
  this.depth = () => {
    const recursion = (node) => {
      if (!node) {
        return 0;
      }
      let max = 0;
      for (let child of node.children) {
        max = Math.max(max, recursion(child));
      }
      return 1 + max;
    };
    return recursion(root);
  };


  /**
   * find the size of the tree
   * @returns {number}              size of the tree
   */
  this.size = () => {
    const recursion = (node) => {
      if (!node) {
        return 0;
      }
      let total = 1;
      for (let child of node.children) {
        total += recursion(child);
      }
      return total;
    }
    return recursion(root);
  };


  /**
   * find the node in the tree matching the given target
   * @param {object}      target    the target to look for
   * @param {function}    equal     the function to define equality
   * @returns {TreeNode}            the matching tree node
   */
  this.search = (target, equal) => {
    const recursion = (root) => {
      if (!root) {
        return null;
      } else if (equal && equal(root, target) || root === target) {
        return root;
      }
      for (let child of root.children) {
        const re = recursion(child);
        if (re) {
          return re;
        }
      }
      return null;
    };
    target = target instanceof TreeNode ? target : new TreeNode(target);
    return recursion(root);
  };


  /**
   * depth first traversal of the tree
   * @returns {Array<BinTreeNode>}  the list of tree nodes
   */
  this.dfs = () => {
    const nodes = [];
    const stack = [root].filter( n=>n );
    while (stack.length > 0) {
      const node = stack.pop();
      if (!node) {
        continue ;
      }
      nodes.push(node);
      for (let i = node.children.length - 1; i >= 0; i--) {
        stack.push(node.children[i]);
      }
    }
    return nodes;
  };


  /**
   * breadth first traversal of the tree
   * @returns {Array<BinTreeNode>}  the list of tree nodes
   */
  this.bfs = () => {
    const nodes = [];
    const queue = [root].filter( n=>n );
    while (queue.length > 0) {
      const node = queue.shift();
      if (node) {
        nodes.push(node);
        queue.push(...node.children);
      }
    }
    return nodes;
  };


  /**
   * Print the tree as string
   * @param {function}    printf  the custom function to print each node
   * @returns {string}            the string representation of the graph
   */
  this.toString = (printf) => {
    if (!root) {
      try {
        return printf(root);
      } catch (_) {
        return '{NULL}';
      }
    }

    const ident = '  ';
    const lines = [];
    const print = (node, level) => {
      let line = '';
      while (line.length < level * ident.length) {
        line += ident;
      }
      line += node.toString(printf);
      lines.push(line);
      for (let child of node.children) {
        print(child, level + 1);
      }
    };
    print(root, 0);
    return lines.join('\n');
  };

};
