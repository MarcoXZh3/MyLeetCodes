/**
 * O(1) set
 */
const RandomizedSet = function() {
  const data = new Set();
  /**
   * Inserts a value to the set
   * @param {number}      val     the value to insert
   * @return {boolean}            whether already exists before insertion or not
   */
  this.insert = function(val) {
    const re = !data.has(val);
    data.add(val);
    return re;
  };

  /**
   * Removes a value from the set
   * @param {number}      val     the value to remove
   * @return {boolean}            whether already exists before deletion or not
   */
  this.remove = function(val) {
    const re = data.has(val);
    data.delete(val);
    return re;
  };

  /**
   * Get a random element from the set
   * @return {number}             the random value from the set
   */
  this.getRandom = function() {
    return [...data][Math.floor(Math.random() * data.size)];
  };
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0380 - Insert Delete GetRandom O(1):');
  const randomSet1 = new RandomizedSet();
  console.log(`  const randomSet1 = new RandomizedSet();`);
  console.log(`  randomSet1.insert(1);     // ${randomSet1.insert(1)}`);
  console.log(`  randomSet1.remove(2);     // ${randomSet1.remove(2)}`);
  console.log(`  randomSet1.insert(2);     // ${randomSet1.insert(2)}`);
  console.log(`  randomSet1.getRandom();   // ${randomSet1.getRandom()}`);
  console.log(`  randomSet1.remove(1);     // ${randomSet1.remove(1)}`);
  console.log(`  randomSet1.insert(2);     // ${randomSet1.insert(2)}`);
  console.log(`  randomSet1.getRandom();   // ${randomSet1.getRandom()}`);
  const randomSet2 = new RandomizedSet();
  console.log(`  const randomSet2 = new RandomizedSet();`);
  console.log(`  randomSet2.remove(0);     // ${randomSet2.remove(0)}`);
  console.log(`  randomSet2.remove(0);     // ${randomSet2.remove(0)}`);
  console.log(`  randomSet2.insert(0);     // ${randomSet2.insert(0)}`);
  console.log(`  randomSet2.getRandom();   // ${randomSet2.getRandom()}`);
  console.log(`  randomSet2.remove(0);     // ${randomSet2.remove(0)}`);
  console.log(`  randomSet2.insert(0);     // ${randomSet2.insert(0)}`);
  if (callback) {
    callback();
  }
};


module.exports = main;
