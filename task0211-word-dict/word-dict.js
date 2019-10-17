/**
 * The word dictionary
 */
const WordDictionary = function() {
  /**
   * Adds a word into the data structure. 
   * @param {string}    word      the word to add to the dictionary
   */
  this.addWord = (word) => {
  };


  /**
   * Check if the given word is in the dictionary.
   * A word could contain the dot character '.' to represent any one letter.
   * @param {string}    word      the word to search
   * @return {boolean}            whether the given word is in the dictionary
   */
  this.search = (word) => {
  };


  /**
   * converts the dictionary to a string
   * @return {string}             the string of the trie
   */
  this.toString = () => {
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
