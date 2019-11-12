/* Java Iterator interface reference:
   https://docs.oracle.com/javase/8/docs/api/java/util/Iterator.html
class PeekingIterator implements Iterator<Integer> {
    private Iterator<Integer> iterator;
    private Integer next;

    public PeekingIterator(Iterator<Integer> iterator) {
        this.iterator = iterator;
        this.next = this.iterator.hasNext() ? this.iterator.next() : null;
    }

    // Returns the next element in the iteration without advancing the iterator.
    public Integer peek() {
        return this.next;
    }

    // hasNext() and next() should behave the same as in the Iterator interface.
    // Override them if needed.
    @Override
    public Integer next() {
        Integer next = this.next;
        this.next = this.iterator.hasNext() ? this.iterator.next() : null;
        return next;
    }

    @Override
    public boolean hasNext() {
        return this.next != null;
    }
}*/

/**
 * Iterator
 * @param {Array}   arr   the array to iterate
 */
const Iterator = function(arr) {
  let idx = -1;
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
  let next = iterator.hasNext() ? iterator.next() : null;
  /**
   * peek the next element without iterating to it
   * @returns {object}    the next element, or null if not available
   */
  this.peek = () => {
    return next;
  };
  /**
   * iterate to and return the next element
   * @returns {object}    the next element, or null if not available
   */
  this.next = () => {
    const re = next;
    next = iterator.hasNext() ? iterator.next() : null;
    return re;
  };


  /**
   * check whether there is more element to iterate to
   * @returns {boolean}   whether next element is available or not
   */
  this.hasNext = () => {
    return iterator.hasNext();
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
