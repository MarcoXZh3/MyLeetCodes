/**
 * Initialize your data structure here.
 */
const SummaryRanges = function() {
  /** 
   * @param {number}      val     the number to add from the stream
   * @return {void}
   */
  this.addNum = (val) => {
  };
  /**
   * @return {number[][]}         the summary ranges so far
   */
  this.getIntervals = () => {
  };
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0352 - Data Stream as Disjoint Intervals:');
  [
    [1, 3, 7, 2, 6],
  ].forEach( vs => {
    const sr = new SummaryRanges();
    console.log(`  const sr = new SummaryRanges();`);
    for (let v of vs) {
      sr.addNum(v);
      console.log(`  sr.addNum(${v});   // ${JSON.stringify(sr.getIntervals())}`);
    }
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
