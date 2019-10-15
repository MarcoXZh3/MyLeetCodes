/**
 * The Trie
 * @see: https://en.wikipedia.org/wiki/Trie
 */
const Trie = function() {
  /**
   * Inserts a word into the trie
   * @param {string}    word      the word to insert
   * @return {void}
   */
  this.insert = (word) => {

  };

  /**
   * Returns if the word is in the trie
   * @param {string}    word      the word to search
   * @return {boolean}            whether in the trie or not
   */
  this.search = (word) => {

  };

  /**
   * Returns if there is any word in the trie that starts with the given prefix
   * @param {string}    prefix    the prefix to search
   * @return {boolean}            whether starts with the prefix or not
   */
  this.startsWith = (prefix) => {

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
  console.log(`  trie.search("apple");    // returns ${trie.search("apple")}`);
  console.log(`  trie.search("app");      // returns ${trie.search("app")}`);
  console.log(`  trie.startsWith("app");  // returns ${trie.startsWith("app")}`);
  trie.insert("app");
  console.log(`  trie.insert("apple");`);
  console.log(`  trie.search("app");      // returns ${trie.search("app")}`);
  if (callback) {
    callback();
  }
};


module.exports = main;
