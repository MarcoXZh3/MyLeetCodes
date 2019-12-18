/**
 * This is the interface that allows for creating nested lists.
 * @param {object}      val         value for the nested integer
 */
const NestedInteger = function(val) {
  let isInt = true;
  let data;
  /**
   * Return true if this NestedInteger holds a single integer, rather than a nested list.
   * @returns {boolean}             whether an integer or not
   */
  this.isInteger = () => {
    return isInt;
  };
  /**
   * Return the single integer that this NestedInteger holds, if it holds a single integer
   * Return null if this NestedInteger holds a nested list
   * @returns {integer}             the integer or null
   */
  this.getInteger = () => {
    return isInt ? data : null;
  };
  /**
   * Set this NestedInteger to hold a single integer equal to value.
   * @param {number}    val       value for the nested integer
   */
  this.setInteger = (val) => {
    isInt = true;
    data = val;
  };
  /**
   * Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
   * @param {number}    val       value for the nested integer
   */
  this.add = (val) => {
    if (isInt) {
      isInt = false;
      data = [val];
    } else {
      data.push(val);
    }
  };
  /**
   * Return the nested list that this NestedInteger holds, if it holds a nested list
   * Return null if this NestedInteger holds a single integer
   * @returns {NestedInteger[]}     the nested integer list
   */
  this.getList = () => {
    return isInt ? null : data;
  };
  /**
   * convert the object to a string
   * @returns {string}              the string representation of the object
   */
  this.toString = () => {
    return this.isInteger() ? `${this.getInteger()}` :
           `[${this.getList().map(e=>e.toString()).join(',')}]`;
  }

  // initialization
  if (Array.isArray(val)) {
    isInt = false;
    data = val.slice();
  } else if (Number.isInteger(val)) {
    this.setInteger(val);
  }
};


/**
 * @param {string}        s     the string of the nested integer
 * @return {NestedInteger}      the nested integer instance
 */
const deserialize = function(s) {
  const recursion = (s) => {
    const re = new NestedInteger();
    if (!s || s.length === 0) {
      return re;
    }
    if (s.charAt(0) !== '[') {
      re.setInteger(parseInt(s, 10));
    } else if (s.length > 2) {
      let start = 1;
      let cnt = 0;
      for (let i = 1; i < s.length; i++) {
        const char = s.charAt(i);
        if (cnt === 0 && (char === ',' || i === s.length - 1)) {
          re.add(recursion(s.substring(start, i)));
          start = i + 1;
        } else if (char === '[') {
          cnt ++;
        } else if (char === ']') {
          cnt --;
        }
      }
    }
    return re;
  };
  return recursion(s);
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
