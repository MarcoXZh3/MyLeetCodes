/**
 * the median finder structure
 */
const MedianFinder = function() {

  /** 
   * @param {number}    num   the number to add to the stream
   * @return {void}           don't return anything
   */
  this.addNum = (num) => {

  };


  /**
   * @return {number}         the median of the stream
   */
  this.findMedian = () => {

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
