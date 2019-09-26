/**
 * The min stack which allows to peek the minimum element
 */
const MinStack0 = function() {
  /**
   * attributes
   */
  const vals = [];
  const orders = [];

  /**
   * push element to the stack
   * @param {object}    x     element to push
   */
  this.push = (x) => {
    vals.push(x);
    orders.push(x);
    orders.sort( (a,b)=>a-b );
  };
  /**
   * pop element from the stack
   * @return {object}         element to pop
   */
  this.pop = () => {
    if (vals.length === 0) {
      return null;
    }
    const x = vals.pop();
    const idx = orders.indexOf(x);
    orders.splice(idx, 1);
    return x;
  };
  /**
   * peek the pop element of the stack
   * @return {object}         element on the top
   */
  this.top = () => {
    return vals.length > 0 ? vals[vals.length - 1] : null;
  };
  /**
   * peek the minimum element in the stack
   * @return {object}         the minimum element
   */
  this.getMin = () => {
    return orders.length > 0 ? orders[0] : null;
  };
  /**
   * cast the stack to a string
   * @return {object}         element to push
   */
  this.toString = () => {
    const size = vals.length;
    let str = `MinStack{size=${size},min=${size>0?orders[0]:null}}:`;
    str += ` >>>[${vals.slice().reverse().join(', ')}]`;
    // str += ` [${orders.join(', ')}]`;
    return str;
  };
};


/**
 * The min stack which allows to peek the minimum element
 */
const MinStack = function() {
  /**
   * attributes
   */
  let min = Number.MAX_SAFE_INTEGER;
  const stack = [];

  /**
   * push element to the stack
   * @param {object}    x     element to push
   */
  this.push = (x) => {
    // if min is about to change, cache the old min before actual pushing
    if (x <= min) {
      stack.push(min);
      min = x;
    }
    stack.push(x);
  };
  /**
   * pop element from the stack
   * @return {object}         element to pop
   */
  this.pop = () => {
    if (stack.length === 0) {
      return null;
    }
    const x = stack.pop();
    // if min is just popped, the top element will be the previous min
    if (x === min) {
      min = stack.pop();
    }
  };
  /**
   * peek the pop element of the stack
   * @return {object}         element on the top
   */
  this.top = () => {
    return stack.length > 0 ? stack[stack.length - 1] : null;
  };
  /**
   * peek the minimum element in the stack
   * @return {object}         the minimum element
   */
  this.getMin = () => {
    return min;
  };
  /**
   * cast the stack to a string
   * @return {object}         element to push
   */
  this.toString = () => {
    return `MinStack{min=${min}, top=${this.top()}}:`
  };
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0155 - Min Stack:');
  let minStack;

  minStack = new MinStack();
  console.log(`  minStack = new MinStack();`);
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

  minStack = new MinStack();
  console.log(`  minStack = new MinStack();`);
  minStack.push(2);
  console.log(`  minStack.push(2);    // ${minStack.toString()}`);
  minStack.push(0);
  console.log(`  minStack.push(0);    // ${minStack.toString()}`);
  minStack.push(3);
  console.log(`  minStack.push(3);    // ${minStack.toString()}`);
  minStack.push(0);
  console.log(`  minStack.push(0);    // ${minStack.toString()}`);
  console.log(`  minStack.getMin();   // returns ${minStack.getMin()}`);
  minStack.pop();
  console.log(`  minStack.pop();      // ${minStack.toString()}`);
  console.log(`  minStack.getMin();   // returns ${minStack.getMin()}`);
  minStack.pop();
  console.log(`  minStack.pop();      // ${minStack.toString()}`);
  console.log(`  minStack.getMin();   // returns ${minStack.getMin()}`);
  minStack.pop();
  console.log(`  minStack.pop();      // ${minStack.toString()}`);
  console.log(`  minStack.getMin();   // returns ${minStack.getMin()}`);

  if (callback) {
    callback();
  }
};


module.exports = main;
