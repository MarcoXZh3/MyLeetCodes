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
 * recursion based solution -- flatten when constructing
 * @param {NestedInteger[]}   nestedList    the nested integer list
 */
const NestedIterator0 = function(nestedList) {
  const list = [];
  const recursion = (arr) => {
    arr.forEach( e => {
      if (e.isInteger()) {
        list.push(e.getInteger());
      } else {
        recursion(e.getList());
      }
    });
  }
  recursion(nestedList);

  /**
   * check if the nested list has a next value
   * @returns {boolean}     whether has next value
   */
  this.hasNext = () => {
    return list.length > 0;
  };
  /**
   * get the next value
   * @returns {integer}     the next value
   */
  this.next = () => {
    return list.shift();
  };
};


/**
 * stack based solution -- flatten on the fly
 * @param {NestedInteger[]}   nestedList    the nested integer list
 */
const NestedIterator = function(nestedList) {
  const stack = [];
  for (let i = nestedList.length - 1; i >= 0; i--) {
    stack.push(nestedList[i]);
  }

  /**
   * check if the nested list has a next value
   * @returns {boolean}     whether has next value
   */
  this.hasNext = () => {
    while (stack.length > 0) {
      if (stack[stack.length - 1].isInteger()) {
        return true;
      }
      const cur = stack.pop().getList();
      for (let i = cur.length - 1; i >= 0; i--) {
        stack.push(cur[i]);
      }
    }
    return false;
  };
  /**
   * get the next value
   * @returns {integer}     the next value
   */
  this.next = () => {
    return stack.pop().getInteger();
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
