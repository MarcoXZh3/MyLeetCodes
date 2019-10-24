/**
 * The stack by queue
 */
const MyStack = function() {

  /**
   * Push element x onto stack
   * @param {number}    x     the element to put to the stack
   * @return {void}
   */
  this.push = (x) => {
  };


  /**
   * Removes the element on top of the stack and returns that element
   * @return {number}         the element just removed from the stack
   */
  this.pop = () => {
  };


  /**
   * Get the top element
   * @return {number}         the top element in the stack
   */
  this.top = () => {
  };


  /**
   * Returns whether the stack is empty
   * @return {boolean}        whether the stack is empty or not
   */
  this.empty = () => {
  };


  /**
   * Cast the stack to string
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
  console.log('Task 0225 - Implement Stack using Queues:');
  const stack = new MyStack();
  console.log(`  const stack = new MyStack();`);
  stack.push(1);
  console.log(`  stack.push(1);   // ${stack.toString()}`);
  stack.push(2);
  console.log(`  stack.push(2);   // ${stack.toString()}`);
  stack.top();
  console.log(`  stack.top();     // ${stack.top()}`);
  stack.pop();   // returns 2
  console.log(`  stack.pop();     // ${stack.pop()} ~ ${stack.toString()}`);
  console.log(`  stack.empty();   // ${stack.empty()}`);
  if (callback) {
    callback();
  }
};


module.exports = main;
