/**
 * recursion: make sure the number list is always sorted to avoid duplications
 * @param {number[]}  nums  the numbers to grab
 * @param {number}    k     how many numbers to grab
 * @returns {number[][]}    all combinations
 */
const recursion = function(nums, k) {
  // if need 1 number, return a 2D array where each element is a 1-number array
  if (k === 1) {
    return nums.map( num=>[num] );
  }

  // otherwise, generate such lists number by number
  let res = [];
  for (let num of nums) {
    // grab 1 number: num
    // generate all k-1 combinations out of all those numbers larger than num
    const res0 = recursion(nums.filter( n=>n>num ), k - 1);
    // prepend num to each of the combinations as part of the k combinations
    res = res.concat(res0.map( row=>[num].concat(row) ));
  }
  return res;
};


/**
 * @param {number}        n       how many numbers we have
 * @param {number}        k       how many numbers to grab
 * @return {number[][]}           all the combinations of the k of n numbers
 */
const combine0 = function(n, k) {
  return recursion([...Array(n).keys()].map( (_,i)=>i+1 ), k);
};


/**
 * back tracking: grab and release 1 number every time
 * @param {number}        n       how many numbers we have
 * @param {number}        k       how many numbers to grab
 * @return {number[][]}           all the combinations of the k of n numbers
 */
const backtracking = function(res, cur, start, n, k) {
  if (k === 0) {
    res.push(JSON.parse(JSON.stringify(cur)));
    return ;
  }

  for (let i = start; i <= n; i++) {
    cur.push(i);
    backtracking(res, cur, i + 1, n, k - 1);
    cur.pop();
  }
};


/**
 * @param {number}        n       how many numbers we have
 * @param {number}        k       how many numbers to grab
 * @return {number[][]}           all the combinations of the k of n numbers
 */
const combine1 = function(n, k) {
  const res = [];
  backtracking(res, [], 1, n, k);
  return res;
};


/**
 * @param {number}        n       how many numbers we have
 * @param {number}        k       how many numbers to grab
 * @return {number[][]}           all the combinations of the k of n numbers
 */
const combine = function(n, k) {
  const res = [];
  let cur = Array(k).fill(0);
  let i = 0;
  while (i >= 0) {
    cur[i] ++;                // grab a next number for the current slot
    if (cur[i] > n) {         // the current slot has taken all numbers, back tracking
      i --;
    } else if (i === k - 1) { // all slots occupied, a result is found
      res.push(JSON.parse(JSON.stringify(cur)));
    } else {
      i ++;
      cur[i] = cur[i - 1];    // copy the number in the current slot to next slot
    }
  }
  return res;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0077 - Combinations:');
  [
    [4, 2],
    [10, 4],
  ].forEach( vs => {
    const nums = combine(vs[0], vs[1]);
    console.log(`  n=${vs[0]}, k=${vs[1]}; c(n,k)=${nums.length}`);
    for (let i = 0; i < nums.length; i++) {
      console.log(`  ${i+1}/${nums.length}: [${nums[i].join(', ')}]`);
    }
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
