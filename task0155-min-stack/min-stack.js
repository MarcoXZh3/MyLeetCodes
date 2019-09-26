/**
 * initialize your data structure here.
 */
const MinStack = function() {
  this.toString = () => 'MinStack';
};


/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {

};


/**
 * @return {void}
 */
MinStack.prototype.pop = function() {

};


/**
 * @return {number}
 */
MinStack.prototype.top = function() {

};


/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0155 - Min Stack:');
  const minStack = new MinStack();
  console.log(`  const minStack = new MinStack();`);
  minStack.push(-2);
  console.log(`  minStack.push(-2);   // ${minStack.toString()}`);
  minStack.push(0);
  console.log(`  minStack.push(0);    // ${minStack.toString()}`);
  minStack.push(-3);
  console.log(`  minStack.push(-3);   // ${minStack.toString()}`);
  console.log(`  minStack.getMin();   // returns ${minStack.getMin()}`);
  minStack.pop();
  console.log(`  minStack.pop();      // ${minStack.toString()}`);
  console.log(`  minStack.top();      // returns ${minStack.top()}`);
  console.log(`  minStack.getMin();   // returns ${minStack.getMin()}`);
  if (callback) {
    callback();
  }
};


module.exports = main;
