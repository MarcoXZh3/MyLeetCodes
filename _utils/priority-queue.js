/**
 * Priority Queue: implemented by max binary heap
 * @param {object[]}    vals    list of value-priority pair
 */
const PriorityQueue = module.exports.PriorityQueue = function(vals) {
  /**
   * the values: each contains the value and priority
   * format: { v:object, p:comparable }[]
   */
  this.vals = [];


  /**
   * insert a value with priority: building the heap
   * @param {object}      v   the value
   * @param {comparable}  p   the priority
   */
  this.enqueue = (v, p) => {
    // append to end
    this.vals.push({ v:v, p:p });
    // and then heapify
    let cur = this.vals.length - 1;         // index of the current value
    let parent = Math.floor((cur - 1) / 2); // index of the parent value
    while (parent >= 0 && this.vals[cur].p > this.vals[parent].p) {
      let tmp = this.vals[cur];
      this.vals[cur] = this.vals[parent];
      this.vals[parent] = tmp;
      cur = parent;
      parent = Math.floor((cur - 1) / 2);
    }
  };


  /**
   * remove a value with the highest priority
   * @returns {object}      the value with the highest priority
   */
  this.dequeue = () => {
    if (this.vals.length === 0) {
      return null;
    } else if (this.vals.length === 1) {
      return this.vals.pop().v;
    }
    const v = this.vals[0].v;
    // overwrite first by last
    this.vals[0] = this.vals.pop();
    // and then heapify
    let cur = 0;                    // index of the current node
    while (true) {
      let child = 2 * cur + 1;      // index of the left child
      let max = cur;
      // compare current with left child
      if (child < this.vals.length && this.vals[max].p < this.vals[child].p) {
        max = child;
      }
      // compare current with right child
      child ++;
      if (child < this.vals.length && this.vals[max].p < this.vals[child].p) {
        max = child;
      }
      if (max === cur) {
        break ;
      }
      let tmp = this.vals[cur];
      this.vals[cur] = this.vals[max];
      this.vals[max] = tmp;
      cur = max;
    }
    return v;
  };


  /**
   * get the value with the highest priority, without removing it
   * @returns {object}      the value with the highest priority
   */
  this.peek = () => {
    return this.vals.length > 0 ? this.vals[0].v : null;
  }


  // initial the queue if needed
  if (vals) {
    for (let v of vals) {
      this.enqueue(v.v, v.p);
    }
  }

};
