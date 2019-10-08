const path = require('path');
const { LRUCache } = require(path.resolve('_utils/cache-lru'));


/**
 * LRU cache by arrays with O(n)
 * @param {number}  capacity    capacity of the cache
 */
const LRUCache0 = function(capacity) {
  /**
   * the parameters
   */
  this.keys = [];
  this.vals = [];
  /**
   * get value from the cache by the given key
   * @param {number}  key         key to search in the cache
   * @return {number}             value to the key
   */
  this.get = function (key) {
    for (let i = 0; i < capacity; i++) {
      if (key === this.keys[i]) {
        this.keys.unshift(this.keys.splice(i, 1)[0]);
        this.vals.unshift(this.vals.splice(i, 1)[0]);
        return this.vals[0];
      }
    }
    return -1;
  };
  /**
   * set value by the key to the cache
   * @param {number}  key         key of the value to be set
   * @param {number}  value       value to be saved in the cache
   * @return {void}
   */
  this.put = function(key, value) {
    for (let i = 0; i < this.keys.length; i++) {
      if (key === this.keys[i]) {
        this.keys.unshift(this.keys.splice(i, 1)[0]);
        this.vals.unshift(this.vals.splice(i, 1)[0]);
        this.vals[0] = value;
        return ;
      }
    }
    this.keys.unshift(key);
    this.vals.unshift(value);
    if (this.keys.length > capacity) {
      this.keys.pop();
      this.vals.pop();
    }
  };
  /**
   * convert the cache to string
   * @return {string}             the string representation of the cache
   */
  this.toString = function() {
    const vs = [];
    for (let i = 0; i < capacity; i++) {
      vs.push(`${this.vals[i]}{${this.keys[i]}}`);
    }
    return `LRU<${capacity}>: [${vs.join(', ')}]`;
  };
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0146 - LRU Cache:');
  const cache = new LRUCache( 2 /* capacity */ );
  cache.put(1, 1);
  console.log(`  cache.put(1, 1);   // ${cache.toString()}`);
  cache.put(2, 2);
  console.log(`  cache.put(2, 2);   // ${cache.toString()}`);
  console.log(`  cache.get(1);      // ${cache.get(1)}`);
  cache.put(3, 3);
  console.log(`  cache.put(3, 3);   // ${cache.toString()}`);
  console.log(`  cache.get(2);      // ${cache.get(2)}`);
  cache.put(4, 4);
  console.log(`  cache.put(4, 4);   // ${cache.toString()}`);
  console.log(`  cache.get(1);      // ${cache.get(1)}`);
  console.log(`  cache.get(3);      // ${cache.get(3)}`);
  console.log(`  cache.get(4);      // ${cache.get(4)}`);
  if (callback) {
    callback();
  }
};


module.exports = main;
