/* Java Iterator interface reference:
   https://docs.oracle.com/javase/8/docs/api/java/util/Iterator.html
class PeekingIterator implements Iterator<Integer> {

    // initialize any member here.
    public PeekingIterator(Iterator<Integer> iterator) {
    }

    // Returns the next element in the iteration without advancing the iterator.
    public Integer peek() {
    }

    // hasNext() and next() should behave the same as in the Iterator interface.
    // Override them if needed.
    @Override
    public Integer next() {
    }

    @Override
    public boolean hasNext() {
    }
}
*/

/**
 * Iterator
 * @param {Array}   arr   the array to iterate
 */
const Iterator = function(arr) {
  let idx = 0;
  arr = arr || [];
  /**
   * iterate to and return the next element
   * @returns {object}    the next element, or null if not available
   */
  this.next = () => {
    return arr[++ idx] || null;
  };
  /**
   * check whether there is more element to iterate to
   * @returns {boolean}   whether next element is available or not
   */
  this.hasNext = () => {
    return idx < arr.length;
  };
};


/**
 * The iterator supporting peek function
 * @param {Iterator}  iterator    the basic iterator to inherit
 */
const PeekingIterator = function(iterator) {

  /**
   * peek the next element without iterating to it
   * @returns {object}    the next element, or null if not available
   */
  this.peek = () => {

  };


  /**
   * iterate to and return the next element
   * @returns {object}    the next element, or null if not available
   */
  this.next = () => {

  };


  /**
   * check whether there is more element to iterate to
   * @returns {boolean}   whether next element is available or not
   */
  this.hasNext = () => {

  };
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0284 - Peeking Iterator:');
  const pi = new PeekingIterator(new Iterator([1, 2, 3]));
  console.log(`  const pi = new PeekingIterator(new Iterator([1, 2, 3]));`);
  console.log(`  pi.next();     // ${pi.next()}`);
  console.log(`  pi.peek();     // ${pi.peek()}`);
  console.log(`  pi.next();     // ${pi.next()}`);
  console.log(`  pi.next();     // ${pi.next()}`);
  console.log(`  pi.hasNext();  // ${pi.hasNext()}`);
  if (callback) {
    callback();
  }
};


module.exports = main;
