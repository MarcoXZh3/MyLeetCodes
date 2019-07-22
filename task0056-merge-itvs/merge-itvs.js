/**
 * @param {number[][]}    intervals   a list of intervals
 * @return {number[][]}               the merged version of the intervals
 */
const merge0 = function(intervals) {
  intervals = intervals.sort( (a,b)=>a[0]-b[0] );
  let i = 0;
  while (i < intervals.length - 1) {
    const itv1 = intervals[i];
    const itv2 = intervals[i + 1];
    if (itv1[1] >= itv2[0]) {
      intervals[i][1] = itv1[1] > itv2[1] ? itv1[1] : itv2[1];
      intervals.splice(i-- + 1, 1);
    }
    i ++;
  }
  return intervals;
};


/**
 * @param {number[][]}    intervals   a list of intervals
 * @return {number[][]}               the merged version of the intervals
 */
const merge = function(intervals) {
  if (intervals.length === 0) {
    return [];
  }

  // build a min heap
  const heap = [];
  for (let itv of intervals) {
    heap.push(itv);
    let c = heap.length - 1;
    let p = Math.floor((c - 1) / 2);
    while (p >= 0 && heap[p][0] > heap[c][0]) {
      const tmp = heap[p];
      heap[p] = heap[c];
      heap[c] = tmp;
      c = p;
      p = Math.floor((c - 1) / 2);
    }
  }

  // heapify and merge at the same time
  intervals = [heap[0]];
  for (let i = heap.length - 1; i >= 0; i--) {
    // retrieve the min, overwrite by final leaf and heapify rest
    const tmp = heap[0];
    heap[0] = heap[i];
    heap[i] = tmp;
    let p = 0;
    let l = 2 * p + 1;
    while (l < i) {
      let r = l + 1;
      let min = r < i && heap[r][0] < heap[l][0] ? r : l;
      if (heap[p][0] > heap[min][0]) {
        const tmp = heap[p];
        heap[p] = heap[min];
        heap[min] = tmp;
        p = min;
        l = 2 * p + 1;
      } else {
        break ;
      }
    }
    // merge
    const itv1 = intervals[intervals.length - 1];
    const itv2 = heap[0];
    if (itv1[1] >= itv2[0]) {
      intervals[intervals.length - 1][1] = itv1[1] > itv2[1] ? itv1[1] : itv2[1];
    } else {
      intervals.push(itv2);
    }
  }
  return intervals;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0056 - Merge Intervals:');
  [
    [[1, 3], [2, 6], [8, 10], [15, 18]],
    [[1, 4], [4, 5]],
    [[1, 4], [2, 3]],
    [[1, 4], [0, 2], [3, 5]],
  ].forEach( vs => {
    const itvs = `[${vs.map( v=>`[${v.join(',')}]` ).join(', ')}]`;
    const merged = `[${merge(vs).map( v=>`[${v.join(',')}]` ).join(', ')}]`;
    console.log(`  itvs=${itvs}, merged=${merged}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
