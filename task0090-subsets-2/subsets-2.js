/**
 * @param {number[][]}    res       all the results
 * @param {number[]}      cur       current result
 * @param {number[][]}    nums      all numbers to grab
 * @param {number[]}      length    how many numbers to grab
 */
const backtracking = function(res, cur, nums, length, map) {
  if (length === 0) {
    const key = cur.sort( (a,b)=>a-b ).join('');
    if (!map[key]) {
      res.push(JSON.parse(JSON.stringify(cur)));
      map[key] = 1;
    }
    return ;
  }
  for (let i = 0; i < nums.length; i++) {
    cur.push(nums[i]);
    backtracking(res, cur, nums.filter( (_,j)=>j>i ), length - 1, map);
    cur.pop();
  }
};


/**
 * backtracking
 * @param {number[]}      nums    numbers to grab for the subsets
 * @return {number[][]}           all subsets
 */
const subsetsWithDup0 = function(nums) {
  nums = nums.sort( (a,b)=>a-b );
  const res = [];
  for (let i = 0; i <= nums.length; i++) {
    backtracking(res, [], nums, i, {});
  }
  return res;
};


/**
 * copy the previous results and each adding a number as the current results
 * @param {number[]}      nums    numbers to grab for the subsets
 * @return {number[][]}           all subsets
 */
const subsetsWithDup = function(nums) {
  const res = [[]];
  const map = { '':1 };
  for (let num of nums) {
    const length = res.length;
    for (let i = 0; i < length; i++) {
      const cur = JSON.parse(JSON.stringify(res[i]));
      cur.push(num);
      const key = cur.sort( (a,b)=>a-b ).join('');
      if (map[key]) {
        continue ;
      }
      res.push(cur);
      map[key] = 1;
    }
  }
  return res;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0090 - Subsets II:');
  [
    [1, 2, 2],
  ].forEach( vs => {
    const res = subsetsWithDup(vs);
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
