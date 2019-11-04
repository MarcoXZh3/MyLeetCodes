/**
 * sort and then find
 * @param {number[]}    citations     the number of citations
 * @return {number}                   the h index
 */
const hIndex0 = function(citations) {
  const sorted = citations.slice().sort( (a,b)=>a-b );
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] >= sorted.length - i) {
      return sorted.length - i;
    }
  }
  return 0;
};


/**
 * bucket sorting
 * @param {number[]}    citations     the number of citations
 * @return {number}                   the h index
 */
const hIndex = function(citations) {
  const n = citations.length;
  const buckets = Array(n + 1).fill(0);
  for (let c of citations) {
    buckets[c > n ? n : c] ++;
  }
  let total = 0;
  for (let i = n; i >= 0; i--) {
    total += buckets[i];
    if (total >= i) {
      return i;
    }
  }
  return 0;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0274 - H-Index:');
  [
    [3, 0, 6, 1, 5],
  ].forEach( vs => {
    console.log(`  h=${hIndex(vs)}, cites=[${vs.join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
