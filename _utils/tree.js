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
 * Print the tree as string
 * @param {TreeNode}  root    root of the tree
 * @returns {string}          the string representation of the tree
 */
module.exports.printTree = function(root) {
  if (!root) {
    return '{NULL}';
  }

  const gap = '   ';

  /**
   * find the length of the longest string among all node values
   * @param {TreeNode}  r     root node of the tree
   * @returns {number}        the max length
   */
  const getWidth = (r) => {
    return r ? Math.max(getWidth(r.left), getWidth(r.right), `${r.val}`.length) : 0;
  };

  /**
   * get the lines of the string representation of the tree
   * @param {TreeNode}  r     root node of the tree
   * @param {number}    max   max string length of the node values in the tree
   * @returns {string[]}      the lines for printing the tree
   */
  const print = (root, max) => {
    if (!root) {
      return [];
    }
    max += max % 2 === 0 ? 1 : 0;     // all values will have odd string lengths
    // the root value line
    let s = `${root.val}`;
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
      while (s2.length < rWidth) {
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
  return print(root, Math.max(getWidth(root), gap.length)).join('\n');
};
