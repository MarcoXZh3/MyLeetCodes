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
const Tree = module.exports.Tree = function(root) {
  this.root = root;

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
