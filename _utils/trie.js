const path = require('path');
const { TreeNode } = require(path.resolve('_utils/tree'));


/**
 * trie node
 * @param {object}        val       val of the node in the list
 * @param {TreeNode[]}    children  (optional) child nodes of the tree node
 */
const TrieNode = module.exports.TrieNode = function(val, children) {
  /**
   * inherits basic binary tree node
   */
  TreeNode.call(this, val);
  /**
   * overwrites the children -- to be a hash map
   */
  this.children = {};
};


/**
 * The Trie -- a prefix tree
 */
module.exports.Trie = function() {
  /**
   * root of the trie
   */
  const root = new TrieNode('');
  const EOF = '{EOF}';    // line ending of each word
  const isNull = (node) => node.val === null;


  /**
   * inserts a word into the trie
   * @param {string}    word      the word to insert
   * @return {void}
   */
  this.insert = (word) => {
    let cur = root;
    for (let i = 0; i < word.length; i++) {
      const char = word.charAt(i);
      if (!cur.children[char]) {
        cur.children[char] = new TreeNode(word.substring(0, i + 1));
      }
      cur = cur.children[char];
    }
    cur.children[EOF] = new TreeNode(null);
  };


  /**
   * check whether the word is in the trie
   * @param {string}    word      the word to search
   * @return {boolean}            whether in the trie or not
   */
  this.search = (word) => {
    word = `${word}`;
    let cur = root;
    while (word.length > 0) {
      const char = word.charAt(0);
      if (!cur.children[char]) {
        return false;
      }
      cur = cur.children[char];
      word = word.substring(1);
    }
    return !!cur.children['{EOF}'];
  };

  /**
   * check whether there is any word in the trie that starts with the given prefix
   * @param {string}    prefix    the prefix to search
   * @return {boolean}            whether starts with the prefix or not
   */
  this.startsWith = (prefix) => {
    let cur = root;
    for (let i = 0; i < prefix.length; i++) {
      const char = prefix.charAt(i);
      if (!cur.children[char]) {
        return false;
      }
      cur = cur.children[char];
    }
    return true;
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
      for (let char in node.children) {
        print(node.children[char], level + 1);
      }
    };
    print(root, 0);
    return lines.join('\n');
  };

};
