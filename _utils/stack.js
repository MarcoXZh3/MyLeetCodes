/**
 * The stack definition
 */
const Stack = module.exports.Stack = function() {
  /**
   * the stack data
   */
  this.vals = [];


  /**
   * push a value to the stack
   * @param {object}    x     the object to push
   */
  this.push = (x) => {
    this.vals.unshift(x);
  }


  /**
   * pop a value from the stack
   * @returns {object}        the popped object - undefined if not available
   */
  this.pop = () => {
    return this.vals.shift();
  }


  /**
   * peek the top element
   * @returns {object}        the top object - undefined if not available
   */
  this.peek = () => {
    return this.vals[0];
  }


  /**
   * check if stack is empty
   * @returns {boolean}       whether empty or not
   */
  this.empty = () => {
    return this.vals.length === 0;
  }

};
