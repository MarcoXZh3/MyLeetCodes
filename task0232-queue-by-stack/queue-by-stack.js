/**
 * The queue by stack
 */
const MyQueue = function() {
  /**
   * Push element x to the back of queue. 
   * @param {number}    x     the element to be put to the queue
   * @return {void}
   */
  this.push = function(x) {
  };

  /**
   * Removes the element from in front of queue and returns that element.
   * @return {number}         the removed element
   */
  this.pop = function() {
  };

  /**
   * Get the front element.
   * @return {number}         the front element
   */
  this.peek = function() {
  };

  /**
   * Returns whether the queue is empty.
   * @return {boolean}        whether empty or not
   */
  this.empty = function() {
  };

  /**
   * Cast the queue to string
   * @return {string}         string format of the stack
   */
  this.toString = () => {
  };

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0232 - Implement Queue using Stacks:');
  const queue = new MyQueue();
  console.log(`  const queue = new MyQueue();`);
  queue.push(1);
  console.log(`  queue.push(1);   // ${queue.toString()}`);
  queue.push(2);
  console.log(`  queue.push(2);   // ${queue.toString()}`);
  console.log(`  queue.peek();    // ${queue.peek()} ~ ${queue.toString()}`);
  console.log(`  queue.pop();     // ${queue.pop()} ~ ${queue.toString()}`);
  console.log(`  queue.empty();   // ${queue.empty()} ~ ${queue.toString()}`);
  if (callback) {
    callback();
  }
};


module.exports = main;
