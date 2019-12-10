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
 * build a nested integer
 * @param {object}   obj        the nested array
 * @returns {NestedInteger}     the nested integer
 */
const buildNestedList = function(obj) {
  const recursion = (a) => a.map( e => new NestedInteger(Array.isArray(e) ? recursion(e) : e) );
  return new NestedInteger(Array.isArray(obj) ? recursion(obj) : obj);
};


/**
 * @param {NestedInteger[]}   nestedList    the nested integer list
 */
const NestedIterator = function(nestedList) {
  /**
   * check if the nested list has a next value
   * @returns {boolean}     whether has next value
   */
  this.hasNext = () => {

  };
  /**
   * get the next value
   * @returns {integer}     the next value
   */
  this.next = () => {

  };
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0341 - Flatten Nested List Iterator:');
  [
    [ [1, 1], 2, [1, 1] ],
    [1, [4, [6] ] ],
  ].forEach( vs => {
    const itr = new NestedIterator([buildNestedList(vs)]);
    const flat = [];
    while (itr.hasNext()) {
      flat.push(itr.next());
    }
    console.log(`  list=${JSON.stringify(vs)}; itr=${JSON.stringify(flat)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
