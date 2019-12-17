/**
 * O(1) set
 */
const RandomizedSet = function() {
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
  console.log('Task 0380 - Insert Delete GetRandom O(1):');
  const randomSet = new RandomizedSet();
  console.log(`  const randomSet = new RandomizedSet();`);
  console.log(`  randomSet.insert(1);     // ${randomSet.insert(1)}`);
  console.log(`  randomSet.remove(2);     // ${randomSet.remove(2)}`);
  console.log(`  randomSet.insert(2);     // ${randomSet.insert(2)}`);
  console.log(`  randomSet.getRandom();   // ${randomSet.getRandom()}`);
  console.log(`  randomSet.remove(1);     // ${randomSet.remove(1)}`);
  console.log(`  randomSet.insert(2);     // ${randomSet.insert(2)}`);
  console.log(`  randomSet.getRandom();   // ${randomSet.getRandom()}`);
  if (callback) {
    callback();
  }
};


module.exports = main;
