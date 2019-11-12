/**
 * linear search
 * @param {number[]}    citations     the number of citations, sorted
 * @return {number}                   the h index
 */
const hIndex0 = function(citations) {
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= citations.length - i) {
      return citations.length - i;
    }
  }
  return 0;
};


/**
 * binary search
 * @param {number[]}    citations     the number of citations, sorted
 * @return {number}                   the h index
 */
const hIndex = function(citations) {
  const n = citations.length;
  let l = 0;
  let r = n - 1;
  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    if (citations[m] === n - m) {
      return n - m;
    } else if (citations[m] < n - m) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  return n - l;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0275 - H-Index II:');
  [
    [0, 1, 3, 5, 6],
  ].forEach( vs => {
    console.log(`  h=${hIndex(vs)}, cites=[${vs.join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
