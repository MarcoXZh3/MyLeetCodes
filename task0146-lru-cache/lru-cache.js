/**
 * the least recently used cache
 * @param {number}  capacity    capacity of the cache
 */
const LRUCache = function(capacity) {

};


/**
 * get value from the cache by the given key
 * @param {number}  key         key to search in the cache
 * @return {number}             value to the key
 */
LRUCache.prototype.get = function(key) {

};


/**
 * set value by the key to the cache
 * @param {number}  key         key of the value to be set
 * @param {number}  value       value to be saved in the cache
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {

};


/**
 * convert the cache to string
 * @return {string}             the string representation of the cache
 */
LRUCache.prototype.toString = function() {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0146 - LRU Cache:');
  const cache = new LRUCache( 2 /* capacity */ );
  console.log(`  cache.put(1, 1);   // ${cache.toString()}`);
  console.log(`  cache.put(2, 2);   // ${cache.toString()}`);
  console.log(`  cache.get(1);      // ${cache.get(1)}`);
  console.log(`  cache.put(3, 3);   // ${cache.toString()}`);
  console.log(`  cache.get(2);      // ${cache.get(2)}`);
  console.log(`  cache.put(4, 4);   // ${cache.toString()}`);
  console.log(`  cache.get(1);      // ${cache.get(1)}`);
  console.log(`  cache.get(3);      // ${cache.get(3)}`);
  console.log(`  cache.get(4);      // ${cache.get(4)}`);
  if (callback) {
    callback();
  }
};


module.exports = main;
