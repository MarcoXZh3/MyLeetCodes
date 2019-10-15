/**
 * The Trie
 * @see: https://en.wikipedia.org/wiki/Trie
 */
const Trie = function() {
  /**
   * attributes: the child nodes identified by each of the chars
   */
  const root = {};


  /**
   * inserts a word into the trie
   * @param {string}    word      the word to insert
   * @return {void}
   */
  this.insert = (word) => {
    const recursion = (i, root) => {
      const c = word.charAt(i);
      root[c] = root[c] || {};
      if (i + 1 === word.length) {
        root[c]['{EOF}'] = true;    // this indicates the end of a word
      } else {
        recursion(i + 1, root[c]);
      }
    };
    recursion(0, root);
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
      if (!cur[char]) {
        return false;
      }
      cur = cur[char];
      word = word.substring(1);
    }
    return !!cur['{EOF}'];
  };

  /**
   * check whether there is any word in the trie that starts with the given prefix
   * @param {string}    prefix    the prefix to search
   * @return {boolean}            whether starts with the prefix or not
   */
  this.startsWith = (prefix) => {
    prefix = `${prefix}`;
    let cur = root;
    while (prefix.length > 0) {
      const char = prefix.charAt(0);
      if (!cur[char]) {
        return false;
      }
      cur = cur[char];
      prefix = prefix.substring(1);
    }
    return true;
  };


  /**
   * converts the trie to a string
   * @param {string}    prefix    the prefix to search
   * @return {boolean}            whether starts with the prefix or not
   */
  this.toString = () => {
    return JSON.stringify(root, null, 2);
  };

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0208 - Implement Trie (Prefix Tree):');
  const trie = new Trie();
  trie.insert("apple");
  console.log(`  trie.insert("apple");`);
  console.log(`${trie.toString()}`);
  console.log(`  trie.search("apple");    // returns ${trie.search("apple")}`);
  console.log(`  trie.search("app");      // returns ${trie.search("app")}`);
  console.log(`  trie.startsWith("app");  // returns ${trie.startsWith("app")}`);
  trie.insert("app");
  console.log(`  trie.insert("apple");`);
  console.log(`${trie.toString()}`);
  console.log(`  trie.search("app");      // returns ${trie.search("app")}`);
  if (callback) {
    callback();
  }
};


module.exports = main;
