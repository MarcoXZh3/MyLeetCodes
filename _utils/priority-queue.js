/**
 * Priority Queue: implemented by (min if ascending; max if descending) heap
 * @param {boolean}   ascending   whether the 1st element is minimum or not
 * @param {array}     vals        list of elements to be added to the queue
 * @param {function}  compare     custom function for element comparison
 *          @param {object}   a       the 1st element
 *          @param {object}   b       the 2nd element
 *          @returns {number}         1 if a > b; -1 if a < b; 0 if a === b
 */
module.exports.PriorityQueue = function (
  ascending = true,
  vals = [],
  compare = (a, b) => a === b ? 0 : (a > b ? 1 : -1),
) {
  /**
   * attributes
   */
  const sign = ascending ? 1 : -1;
  const data = [];


  /**
   * insert a value with priority: building the heap
   * @param {object}      v   the value
   */
  this.enqueue = (v) => {
    // append to end
    data.push(v);
    // and then heapify
    let c = data.length - 1;          // index of the current value
    let p = Math.floor((c - 1) / 2);  // index of the parent value
    while (p >= 0 && compare(data[c], data[p]) * sign < 0) {
      let tmp = data[c];
      data[c] = data[p];
      data[p] = tmp;
      c = p;
      p = Math.floor((c - 1) / 2);
    }
  };


  /**
   * remove a value with the highest priority
   * @returns {object}      the value with the highest priority
   */
  this.dequeue = () => {
    if (data.length === 0) {
      return null;
    } else if (data.length === 1) {
      return data.pop();
    }
    const v = data[0];
    // overwrite first by last
    data[0] = data.pop();
    // and then heapify
    let p = 0;              // index of the current node
    while (true) {
      let c = 2 * p + 1;    // index of the left child
      let min = p;
      // compare current with left child
      if (c < data.length && compare(data[min], data[c]) * sign > 0) {
        min = c;
      }
      // compare current with right child
      c ++;
      if (c < data.length && compare(data[min], data[c]) * sign > 0) {
        min = c;
      }
      if (min === p) {
        break ;
      }
      let tmp = data[p];
      data[p] = data[min];
      data[min] = tmp;
      p = min;
    }
    return v;
  };


  /**
   * get the value with the highest priority, without removing it
   * @returns {object}      the value with the highest priority
   */
  this.peek = () => {
    return data.length > 0 ? data[0] : null;
  }


  /**
   * convert the priority queue to a string
   * @param {function}    printf  the custom function to print each element
   * @returns {string}            the string representation of the priority queue
   */
  this.toString = (printf) => {
    return data.map( v => printf ? printf(v) : `${v}` ).join('->');
  };


  // initial the queue with the given list of elements
  for (let v of vals || []) {
    this.enqueue(v);
  }

};
