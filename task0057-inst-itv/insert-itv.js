/**
 * simulate all possible cases
 * @param {number[][]}    itvs      the original intervals
 * @param {number[]}      itv       the new intervals to be inserted
 * @return {number[][]}             the merged intevals
 */
const insert0 = function(itvs, itv) {
  let merging = -1; // -1 not merging yet; 0 merging; 1 merge finished
  let i = 0;
  while (i < itvs.length) {
    const cur = itvs[i];
    if (merging === -1) {
      if (itv[0] > cur[1]) {
        i ++;
        continue ;
      }
      if (itv[1] < cur[0]) {
        itvs.splice(i, 0, itv);
        merging = 1;
        break ;
      }
      merging = 0;
      cur[0] = cur[0] < itv[0] ? cur[0] : itv[0];
      if (cur[1] >= itv[1]) {
        merging = 1;
        break ;
      } else {
        cur[1] = itv[1];
        i ++;
      }
    } else if (merging === 0) {
      const prev = itvs[i - 1];
      if (prev[1] > cur[1]) {
        itvs.splice(i, 1);
      } else {
        if (prev[1] >= cur[0]) {
          prev[1] = cur[1];
          itvs.splice(i, 1);
        }
        merging = 1;
        break ;
      }
    }
  }
  if (merging === -1) {
    itvs.push(itv);
  }
  return itvs;
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
 * insert the itv to the ordered place and then merge
 * @param {number[][]}    itvs      the original intervals
 * @param {number[]}      itv       the new intervals to be inserted
 * @return {number[][]}             the merged intevals
 */
const insert = function(itvs, itv) {
  let i = 0;
  while (i < itvs.length) {
    if (itv[0] >= itvs[i++][0]) {
      break ;
    }
  }
  itvs.splice(i, 0, itv);
  return merge(itvs);
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0057 - Insert Interval:');
  [
    [
      [ [1, 3], [6, 9] ], [2, 5]
    ],
    [
      [ [1, 2], [3, 5], [6, 7], [8, 10], [12, 16] ], [4, 8]
    ],
    [
      [ [1, 5] ], [2, 3]
    ],
    [
      [ [1, 5] ], [0, 0]
    ],
  ].forEach( vs => {
    const itv = `[${vs[1].join(',')}]`;
    const itvs = `[${vs[0].map( v=>`[${v.join(',')}]` ).join(', ')}]`;
    const merged = `[${insert(vs[0], vs[1]).map( v=>`[${v.join(',')}]` ).join(', ')}]`;
    console.log(`  itv=${itv}, itvs=${itvs}, merged=${merged}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
