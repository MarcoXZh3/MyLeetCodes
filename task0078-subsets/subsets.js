/**
 * @param {number[][]}    res       all the results
 * @param {number[]}      cur       current result
 * @param {number[][]}    nums      all numbers to grab
 * @param {number[]}      length    how many numbers to grab
 */
const backtracking = function(res, cur, nums, length) {
  if (length === 0) {
    res.push(JSON.parse(JSON.stringify(cur)));
    return ;
  }
  for (let i = 0; i < nums.length; i++) {
    cur.push(nums[i]);
    backtracking(res, cur, nums.filter( n=>n>nums[i] ), length - 1);
    cur.pop();
  }
};


/**
 * backtracking
 * @param {number[]}      nums    numbers to grab for the subsets
 * @return {number[][]}           all subsets
 */
const subsets1 = function(nums) {
  nums = nums.sort( (a,b)=>a-b );
  const res = [];
  for (let i = 0; i <= nums.length; i++) {
    backtracking(res, [], nums, i);
  }
  return res;
};


/**
 * copy the previous results and each adding a number as the current results
 * @param {number[]}      nums    numbers to grab for the subsets
 * @return {number[][]}           all subsets
 */
const subsets = function(nums) {
  const res = [[]];
  for (let num of nums) {
    const length = res.length;
    for (let i = 0; i < length; i++) {
      res.push(JSON.parse(JSON.stringify(res[i])));
      res[res.length - 1].push(num);
    }
  }
  return res;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0078 - Subsets:');
  [
    [1, 2, 3],
  ].forEach( vs => {
    const res = subsets(vs);
    console.log(`  nums=[${vs.join(', ')}], subsets=${res.length}`);
    for (let i = 0; i < res.length; i++) {
      console.log(`  ${i+1}/${res.length}: [${res[i].join(', ')}]`);
    }
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
