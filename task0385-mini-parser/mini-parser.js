/**
 * This is the interface that allows for creating nested lists.
 * @param {object}      val         value for the nested integer
 */
const NestedInteger = function(val) {
  /**
   * Return true if this NestedInteger holds a single integer, rather than a nested list.
   * @returns {boolean}             whether an integer or not
   */
  this.isInteger = () => {
    return !Array.isArray(val);
  };
  /**
   * Return the single integer that this NestedInteger holds, if it holds a single integer
   * Return null if this NestedInteger holds a nested list
   * @returns {integer}             the integer or null
   */
  this.getInteger = () => {
    return Array.isArray(val) ? null : val;
  };
  /**
   * Return the nested list that this NestedInteger holds, if it holds a nested list
   * Return null if this NestedInteger holds a single integer
   * @returns {NestedInteger[]}     the nested integer list
   */
  this.getList = () => {
    return Array.isArray(val) ? val : null;
  };
  /**
   * convert the object to a string
   * @returns {string}              the string representation of the object
   */
  this.toString = () => {
    return this.isInteger() ? `${this.getInteger()}` :
           `[${this.getList().map(e=>e.toString()).join(',')}]`;
  }
};


/**
 * @param {string}        s     the string of the nested integer
 * @return {NestedInteger}      the nested integer instance
 */
const deserialize = function(s) {
  return new NestedInteger(0);
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0385 - Mini Parser:');
  [
    '324',
    '[123,[456,[789]]]',
  ].forEach( v => {
    console.log(`  str="${v}", val=${deserialize(v).toString()}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
