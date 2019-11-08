const path = require('path');
const { PriorityQueue } = require(path.resolve('_utils/priority-queue'));


/**
 * O(n) - maintain a sorted array whiling inserting
 * the median finder structure
 */
const MedianFinder0 = function() {
  const data = [];
  /** 
   * @param {number}    num   the number to add to the stream
   * @return {void}           don't return anything
   */
  this.addNum = (num) => {
    let i = 0;
    while (i < data.length && data[i] < num) {
      i ++;
    }
    data.splice(i, 0, num);
  };
  /**
   * @return {number}         the median of the stream
   */
  this.findMedian = () => {
    if (data.length < 1) {
      return null;
    }
    const mid = (data.length - 1) / 2;
    return (data[Math.floor(mid)] + data[Math.ceil(mid)]) / 2;
  };
};


/**
 * O(log n) - two heaps
 * the median finder structure
 */
const MedianFinder = function() {
  const heap1 = new PriorityQueue(false);   // max heap of smaller numbers
  const heap2 = new PriorityQueue(true);    // min heap of bigger numbers

  /** 
   * @param {number}    num   the number to add to the stream
   * @return {void}           don't return anything
   */
  this.addNum = (num) => {
    heap1.enqueue(num);
    heap2.enqueue(heap1.dequeue());
    if (heap1.size() < heap2.size()) {
      heap1.enqueue(heap2.dequeue());
    }
  };


  /**
   * @return {number}         the median of the stream
   */
  this.findMedian = () => {
    return heap1.size() > heap2.size() ? heap1.peek() :
           (heap1.peek() + heap2.peek()) / 2;
  };

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0295 - Find Median from Data Stream:');
  const mf = new MedianFinder();
  console.log(`  const mf = new MedianFinder();`);
  mf.addNum(1);
  console.log(`  mf.addNum(1);`);
  mf.addNum(2);
  console.log(`  mf.addNum(2);`);
  console.log(`  mf.findMedian();   // ${mf.findMedian()}`);
  mf.addNum(3);
  console.log(`  mf.addNum(3);`);
  console.log(`  mf.findMedian();   // ${mf.findMedian()}`);
  if (callback) {
    callback();
  }
};


module.exports = main;
