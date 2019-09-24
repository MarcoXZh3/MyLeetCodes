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
 * LRU cache by hash map and double linked list with O(1)
 * @see: https://en.wikipedia.org/wiki/Cache_replacement_policies#LRU
 * @see: https://www.programcreek.com/2013/03/leetcode-lru-cache-java/
 * @param {number}  capacity    capacity of the cache
 */
const LRUCache = function(capacity) {
  /**
   * Node to put in the LRU cache
   * -- a combination of hashable node and double linked list node
   */
  const Node = function(key, value) {
    this.key = key;
    this.val = value;
    this.prev = null;
    this.next = null;
  };

  /**
   * the parameters of the LRU cache
   */
  this.data = {};
  this.head = null;
  this.tail = null;
  /**
   * get value from the cache by the given key
   * @param {number}  key         key to search in the cache
   * @return {number}             value to the key
   */
  this.get = function (key) {
    key = `${key}`;
    if (key in this.data) {
      const node = this.data[key];
      remove(node);
      offer(node);
      return node.val;
    } else {
      return -1;
    }
  };
  /**
   * set value by the key to the cache
   * @param {number}  key         key of the value to be set
   * @param {number}  value       value to be saved in the cache
   * @return {void}
   */
  this.put = function(key, value) {
    key = `${key}`;
    if (key in this.data) {
      const node = this.data[key];
      node.val = value;
      remove(node);
      offer(node);
    } else {
      if (Object.keys(this.data).length >= capacity) {
        delete this.data[this.head.key];
        remove(this.head);
      }
      const node = new Node(key, value);
      offer(node);
      this.data[key] = node;
    }
  };
  /**
   * convert the cache to string
   * @return {string}             the string representation of the cache
   */
  this.toString = function() {
    const vs = [];
    for (let key in this.data) {
      const node = this.data[key];
      vs.push(`${node.val}{${node.key}}`);
    }
    return `LRU<${capacity}>: [${vs.join(', ')}]`;
  };
  /**
   * remove the given node from LRU cache
   * @param {Node}    node        the node to remove
   */
  const remove = (node) => {
    if (node.prev) {
      node.prev.next = node.next;
    } else {
      this.head = node.next;
    }
    if (node.next) {
      node.next.prev = node.prev;
    } else {
      this.tail = node.prev;
    }
  };
  /**
   * offer the given node to LRU cache
   * @param {Node}    node        the node to offer
   */
  const offer = (node) => {
    if (this.tail) {
      this.tail.next = node;
    }
    node.prev = this.tail;
    node.next = null;
    this.tail = node;
    if (!this.head) {
      this.head = this.tail;
    }
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
