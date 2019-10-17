/**
 * The word dictionary by set
 */
const WordDictionary0 = function() {
  /**
   * the word set
   */
  const set = new Set();


  /**
   * Adds a word into the data structure. 
   * @param {string}    word      the word to add to the dictionary
   */
  this.addWord = (word) => {
    set.add(word);
  };


  /**
   * Check if the given word is in the dictionary.
   * A word could contain the dot character '.' to represent any one letter.
   * @param {string}    word      the word to search
   * @return {boolean}            whether the given word is in the dictionary
   */
  this.search = (word) => {
    for (let w of set.values()) {
      if (w.length !== word.length) {
        continue ;
      }
      let match = true;
      for (let i = 0; i < w.length; i++) {
        if (w.charAt(i) !== word.charAt(i) && word.charAt(i) !== '.') {
          match = false;
          break ;
        }
      }
      if (match) {
        return true;
      }
    }
    return false;
  };


  /**
   * converts the dictionary to a string
   * @return {string}             the string of the trie
   */
  this.toString = () => {
    return JSON.stringify([...set.values()]);
  };

};


/**
 * The word dictionary by trie
 */
const WordDictionary = function() {
  /**
   * the word trie
   */
  const trie = {};
  const EOF = '{EOF}';


  /**
   * Adds a word into the data structure. 
   * @param {string}    word      the word to add to the dictionary
   */
  this.addWord = (word) => {
    let cur = trie;
    for (let i = 0; i < word.length; i++) {
      const char = word.charAt(i);
      cur[char] = cur[char] || {};
      cur = cur[char];
    }
    cur[EOF] = true;
  };


  /**
   * Check if the given word is in the dictionary.
   * A word could contain the dot character '.' to represent any one letter.
   * @param {string}    word      the word to search
   * @return {boolean}            whether the given word is in the dictionary
   */
  this.search = (word) => {
    const chars = word.split('');
    const match = (cur, i) => {
      if (i === chars.length) {
        return !!cur && !!cur[EOF];
      } else if (!cur) {
        return false;
      } else if (chars[i] !== '.') {
        return match(cur[chars[i]], i + 1);
      }
      for (let char in cur) {
        if (match(cur[char], i + 1)) {
          return true;
        }
      }
      return false;
    };
    return match(trie, 0);
  };


  /**
   * converts the dictionary to a string
   * @return {string}             the string of the trie
   */
  this.toString = () => {
    return JSON.stringify(trie);
  };

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0211 - Add and Search Word - Data structure design:');
  const dict = new WordDictionary();
  console.log(`const dict = new WordDictionary();`);
  dict.addWord('bad');
  console.log(`dict.addWord('bad');`);
  console.log(dict.toString());
  dict.addWord('dad');
  console.log(`dict.addWord('dad');`);
  console.log(dict.toString());
  dict.addWord('mad');
  console.log(`dict.addWord('mad');`);
  console.log(dict.toString());
  console.log(`dict.search('pad');    // ${dict.search('pad')}`);
  console.log(`dict.search('bad');    // ${dict.search('bad')}`);
  console.log(`dict.search('.ad');    // ${dict.search('.ad')}`);
  console.log(`dict.search('b..');    // ${dict.search('b..')}`);
  if (callback) {
    callback();
  }
};


module.exports = main;
