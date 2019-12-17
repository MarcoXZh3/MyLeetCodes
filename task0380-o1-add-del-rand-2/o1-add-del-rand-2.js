/**
 * O(1) collection allowing duplicated elements
 */
const RandomizedCollection = function() {
  /**
   * Inserts a value to the set
   * @param {number}      val     the value to insert
   * @return {boolean}            whether already exists before insertion or not
   */
  this.insert = function(val) {
  };

  /**
   * Removes a value from the set
   * @param {number}      val     the value to remove
   * @return {boolean}            whether already exists before deletion or not
   */
  this.remove = function(val) {
  };

  /**
   * Get a random element from the set
   * @return {number}             the random value from the set
   */
  this.getRandom = function() {
  };
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0381 - Insert Delete GetRandom O(1) - Duplicates allowed:');
  const collection = new RandomizedCollection();
  console.log(`  const collection = new RandomizedCollection();`);
  console.log(`  collection.insert(1);     // ${collection.insert(1)}`);
  console.log(`  collection.insert(1);     // ${collection.insert(1)}`);
  console.log(`  collection.insert(2);     // ${collection.insert(2)}`);
  console.log(`  collection.getRandom();   // ${collection.getRandom()}`);
  console.log(`  collection.remove(1);     // ${collection.remove(1)}`);
  console.log(`  collection.getRandom();   // ${collection.getRandom()}`);
  if (callback) {
    callback();
  }
};


module.exports = main;
