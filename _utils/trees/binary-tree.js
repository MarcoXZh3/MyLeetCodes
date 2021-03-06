/**
 * binary tree node
 * @param {object}        val       val of the node in the list
 * @param {BinTreeNode}   l         (optional) left child of the node
 * @param {BinTreeNode}   r         (optional) right child of the node
 */
const BinTreeNode = module.exports.BinaryTreeNode = function(val, l, r) {
  /**
   * value of the node
   */
  this.val = val;
  /**
   * left child
   */
  this.left = l || null;
  /**
   * right child
   */
  this.right = r || null;
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
 * binary tree
 * @param {BinTreeNode}   root       root of the binary tree
 */
const BinTree = module.exports.BinaryTree = function(root) {
  this.root = root;


  /**
   * find the depth of the tree
   * @returns {number}              depth of the tree
   */
  this.depth = () => {
    const recursion = (node) => {
      return node ? 1 + Math.max(recursion(node.left), recursion(node.right)) : 0;
    };
    return recursion(this.root);
  };


  /**
   * find the size of the tree
   * @returns {number}              size of the tree
   */
  this.size = () => {
    const recursion = (node) => {
      return node ? 1 + recursion(node.left) + recursion(node.right) : 0;
    };
    return recursion(this.root);
  };


  /**
   * find the node in the tree matching the given target
   * @param {object}      target    the target to look for
   * @param {function}    equal     the function to define equality
   * @returns {BinTreeNode}         the matching tree node
   */
  this.search = (target, equal) => {
    const recursion = (node) => {
      if (!node) {
        return null;
      }
      if (equal && equal(node, target) || node === target) {
        return node;
      }
      return recursion(node.left) || recursion(node.right);
    };
    target = target instanceof BinTreeNode ? target : new BinTreeNode(target);
    return recursion(this.root);
  };


  /**
   * depth first traversal of the tree
   * @returns {Array<BinTreeNode>}  the list of tree nodes
   */
  this.dfs = () => {
    const nodes = [];
    const stack = [this.root].filter( n=>n );
    while (stack.length > 0) {
      const node = stack.pop();
      if (node) {
        nodes.push(node);
        // left before right in the next stage so first push right then left
        stack.push(node.right, node.left);
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
    const queue = [this.root].filter( n=>n );
    while (queue.length > 0) {
      const node = queue.shift();
      if (node) {
        nodes.push(node);
        queue.push(node.left, node.right);
      }
    }
    return nodes;
  };


  /**
   * in-order traversal of the tree
   * @returns {Array<BinTreeNode>}  the list of tree nodes
   */
  this.inOrder = () => {
    const recursion = (node) => {
      return node ? recursion(node.left).concat([node]).concat(recursion(node.right)) : [];
    };
    return recursion(this.root);
  };


  /**
   * pre-order traversal of the tree
   * @returns {Array<BinTreeNode>}  the list of tree nodes
   */
  this.preOrder = () => {
    const recursion = (node) => {
      return node ? [node].concat(recursion(node.left)).concat(recursion(node.right)) : [];
    };
    return recursion(this.root);
  };


  /**
   * post-order traversal of the tree
   * @returns {Array<BinTreeNode>}  the list of tree nodes
   */
  this.postOrder = () => {
    const recursion = (node) => {
      return node ? recursion(node.left).concat(recursion(node.right)).concat([node]) : [];
    };
    return recursion(this.root);
  };


  /**
   * Print the binary tree as string
   * @param {function}    printf  the custom function to print each node
   * @returns {string}            the string representation of the graph
   */
  this.toString = (printf) => {
    if (!this.root) {
      try {
        return printf(this.root);
      } catch (_) {
        return '{NULL}';
      }
    }

    const gap = '   ';
    /**
     * find the length of the longest string among all node values
     * @param {BinTreeNode}  r     root node of the tree
     * @returns {number}        the max length
     */
    const getWidth = (r) => {
      return r ? Math.max(
                  getWidth(r.left),
                  getWidth(r.right),
                  r.toString(printf).length
                 ) : 0;
    };

    /**
     * get the lines of the string representation of the tree
     * @param {BinTreeNode}  r     root node of the tree
     * @param {number}    max   max string length of the node values in the tree
     * @returns {string[]}      the lines for printing the tree
     */
    const print = (root, max) => {
      if (!root) {
        return [];
      }
      max += max % 2 === 0 ? 1 : 0;     // all values will have odd string lengths
      // the root value line
      let s = root.toString(printf);
      while (s.length < max) {
        s = ` ${s} `;
      }
      s = s.substring(s.length > max ? 1 : 0);  // if even, remove 1 leading space
  
      // gather the strings of the sub trees
      const lefts = print(root.left, max);
      const rights = print(root.right, max);
      if (lefts.length === 0 && rights.length === 0) {
        return [s];
      }
  
      /*
      find out the widths of all related parties
      all of them will always be odd numbers; if not, *append* 1 extra space
                $$VALUE$$
            +-------+-------+
      #############   #############
      #   left    #   #   right   #
      #   sub     #   #   sub     #
      #   tree    #   #   tree    #
      #############   #############
      <-    A    ->   <-    B    ->
                <C><G><C>
                <-  S  ->
      */
      let half = Math.floor((s.length - gap.length) / 2);     // C
      let lWidth = Math.max((lefts[0] || '').length, half);   // A
      let rWidth = Math.max((rights[0] || '').length, half);  // B
      const width = lWidth + gap.length + rWidth;
  
      // the string array
      const lines = [];
      // the connector line (under the node value line) builds first
      let idx = 0;
      let s1 = '';      // left side
      if (root.left) {
        while (lefts[0].charAt(idx++) === ' ') ;
        idx += Math.floor(lefts[0].trim().length / 2) - 1;
        while (s1.length < idx) {
          s1 += ' ';
        }
        s1 += '+';
        while (s1.length < lWidth + Math.floor(gap.length / 2)) {
          s1 += '-';
        }
      } else {
        while (s1.length < lWidth + Math.floor(gap.length / 2)) {
          s1 += ' ';
        }
      }
      let s2 = '';      // right side
      if (root.right) {
        idx = rights[0].length - 1;
        while (rights[0].charAt(idx --) === ' ') ;
        idx -= Math.floor(rights[0].trim().length / 2) - 1;
        while (s2.length < idx + Math.floor(gap.length / 2)) {
          s2 += '-';
        }
        s2 += '+';
        while (s2.length < rWidth + Math.floor(gap.length / 2)) {
          s2 += ' ';
        }
      } else {
        while (s2.length < Math.floor((rWidth + gap.length) / 2)) {
          s2 += ' ';
        }
      }
      lines.push(`${s1}+${s2}`);
      // the node value line: expand with spaces according to the connector line
      idx = lines[0].indexOf('+');
      if (root.left) {
        idx = lines[0].indexOf('+', idx + 1);
      }
      s1 = '';
      while (s1.length + Math.floor(s.length / 2) < idx) {
        s1 += ' ';
      }
      s1 += s;
      while (s1.length < width) {
        s1 += ' ';
      }
      lines.unshift(s1);
      // concat the strings of the sub trees
      for (let i = 0; i < Math.max(lefts.length, rights.length); i++) {
        // line of the left sub tree
        s1 = i < lefts.length ? lefts[i] : '';
        while (s1.length < lWidth) {
          s1 += ' ';
        }
        // line of the right sub tree
        s2 = i < rights.length ? rights[i] : '';
        while (s2.length < rWidth) {
          s2 += ' ';
        }
        lines.push(`${s1}${gap}${s2}`);
      }
      return lines;
    };

    // find the max width then immediately print the tree recursively
    return print(this.root, Math.max(getWidth(this.root), gap.length)).join('\n');
  };

};


/**
 * create a tree out of an array representing a complete binary tree
 * @param {object[]}          arr       the number array
 * @returns {BinaryTree}                the root of the tree
 */
module.exports.arrToBinTree = function(arr) {
  if (!arr || arr.length === 0) {
    return null;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === null) {
      continue ;
    }
    arr[i] = arr[i] instanceof BinTreeNode ? arr[i] : new BinTreeNode(arr[i]);
    let c = i * 2 + 1;
    if (c < arr.length) {
      arr[i].left = arr[c];
    }
    c ++;
    if (c < arr.length) {
      arr[i].right = arr[c];
    }
  }
  return new BinTree(arr[0]);
};
