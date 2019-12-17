/**
 * O(1) collection allowing duplicated elements
 */
const RandomizedCollection = function() {
  const vals = [];
  const idxs = {};
  /**
   * Inserts a value to the set
   * @param {number}      val     the value to insert
   * @return {boolean}            whether already exists before insertion or not
   */
  this.insert = function(val) {
    const key = `${val}`;
    idxs[key] = idxs[key] || new Set();
    idxs[key].add(vals.length);
    vals.push(val);
    return idxs[key].size === 1;
  };

  /**
   * Removes a value from the set
   * @param {number}      val     the value to remove
   * @return {boolean}            whether already exists before deletion or not
   */
  this.remove = function(val) {
    let key = `${val}`;
    if (!idxs[key] || idxs[key].size === 0) {
      return false;
    }
    const idx = idxs[key].values().next().value;
    idxs[key].delete(idx);
    const last = vals.pop();
    if (idx !== vals.length) {
      vals[idx] = last;
      key = `${last}`;
      idxs[key].delete(vals.length);
      idxs[key].add(idx);
    }
    return true;
  };

  /**
   * Get a random element from the set
   * @return {number}             the random value from the set
   */
  this.getRandom = function() {
    return vals.length === 0 ? -1 : vals[Math.floor(Math.random() * vals.length)];
  };
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0381 - Insert Delete GetRandom O(1) - Duplicates allowed:');
  const collection1 = new RandomizedCollection();
  console.log(`  const collection1 = new RandomizedCollection();`);
  console.log(`  collection1.insert(1);     // ${collection1.insert(1)}`);
  console.log(`  collection1.insert(1);     // ${collection1.insert(1)}`);
  console.log(`  collection1.insert(2);     // ${collection1.insert(2)}`);
  console.log(`  collection1.getRandom();   // ${collection1.getRandom()}`);
  console.log(`  collection1.remove(1);     // ${collection1.remove(1)}`);
  console.log(`  collection1.getRandom();   // ${collection1.getRandom()}`);
  const collection2 = new RandomizedCollection();
  console.log(`  const collection2 = new RandomizedCollection();`);
  console.log(`  collection2.insert(0);     // ${collection2.insert(0)}`);
  console.log(`  collection2.remove(0);     // ${collection2.remove(0)}`);
  console.log(`  collection2.insert(1);     // ${collection2.insert(1)}`);
  console.log(`  collection2.remove(0);     // ${collection2.remove(0)}`);
  console.log(`  collection2.getRandom();   // ${collection2.getRandom()}`);
  console.log(`  collection2.insert(2);     // ${collection2.insert(2)}`);
  console.log(`  collection2.getRandom();   // ${collection2.getRandom()}`);
  if (callback) {
    callback();
  }
};


module.exports = main;
