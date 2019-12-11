/**
 * flat 1D array of sorted boundaries
 */
const SummaryRanges0 = function() {
  const bounds = [Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY];
  /**
   * @param {number}      val     the number to add from the stream
   * @return {void}
   */
  this.addNum = (val) => {
    // find the right range to put the value - linear search
    let i = 1;
    while (i < bounds.length) {
      if (bounds[i - 1] <= val && val <= bounds[i]) {
        break ;
      }
      i ++;
    }
    // 1: if the value already in a range
    if (i % 2 === 0 || bounds[i - 1] === val || bounds[i] === val) {
      return ;
    }
    // 2: if value not next to any of the two boundaries
    if (bounds[i - 1] + 1 < val && val < bounds[i] - 1) {
      bounds.splice(i, 0, val, val);
      return ;
    }
    // 3: if value next to any of the two boundaries, expand it ...
    if (bounds[i - 1] + 1 === val) {
      bounds[i - 1] = val;
    }
    if (val + 1 === bounds[i]) {
      bounds[i] = val;
    }
    // ... and merge the boundaries if needed
    if (bounds[i - 1] + 1 >= bounds[i]) {
      bounds.splice(i - 1, 2);
    }
  };
  /**
   * @return {number[][]}         the summary ranges so far
   */
  this.getIntervals = () => {
    const res = [];
    for (let i = 1; i < bounds.length - 1; i += 2) {  // skip the INFINITIes
      res.push([bounds[i], bounds[i + 1]]);
    }
    return res;
  };
};


/**
 * binary search
 */
const SummaryRanges = function() {
  const ranges = [];
  /**
   * @param {number}      val     the number to add from the stream
   * @return {void}
   */
  this.addNum = (val) => {
    let l = 0;
    let r = ranges.length - 1;
    while (l <= r) {
      const m = Math.floor((l + r) / 2);
      const range = ranges[m];
      if (range[0] <= val && val <= range[1]) {
        return ;
      } else if (range[0] > val) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    }
    const pos = Math.min(l, r) + 1;
    ranges.splice(pos, 0, [val, val]);
    if (pos + 1 < ranges.length && val === ranges[pos + 1][0] - 1) {
      ranges[pos][1] = ranges[pos + 1][1];
      ranges.splice(pos + 1, 1);
    }
    if (pos - 1 >= 0 && val === ranges[pos - 1][1] + 1) {
      ranges[pos - 1][1] = ranges[pos][1];
      ranges.splice(pos, 1);
    }
  };
  /**
   * @return {number[][]}         the summary ranges so far
   */
  this.getIntervals = () => {
    return ranges;
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
    [1, 0],
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
