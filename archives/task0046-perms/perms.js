/**
 * consider the indexes to form an N-ary number, then the task is to find all
 * such N-ary numbers between [0, n^n] without duplicated N-ary digits
 * @param {number[]}      nums    the numbers to create the permutations
 * @return {number[][]}           all of the permutations
 */
const permute1 = function(nums) {
  const res = [];
  const maps = {};
  nums.forEach( (n, i) => {
    maps[`${i}`] = n;
  });
  const length = nums.length;
  // loop numbers from 0 to n^n and look for non-duplicated ones
  for (let i = 0; i < Math.pow(length, length); i++) {
    let n = i;
    const idxs = {};      // N-ary digits of n are saved here
    const orders = {};    // and the order of the digits are saved here
    let cnt = 0;
    // convert the number n to N-ary
    while (Object.keys(idxs).length < length) {
      const d = n % length;
      if (`${d}` in idxs) {     // stop converting once duplications found
        break ;
      }
      idxs[`${d}`] = 1;         // the N-ary digit d
      orders[`${++cnt}`] = d;   // the order of the d in the N-ary number
      n = Math.floor(n / length);
    }
    if (cnt !== length) {     // once duplication found, this n is not an answer
      continue ;
    }
    // retrieve the numbers from nums by index according to the N-ary
    res.push(Object.keys(orders).sort( (a,b)=>parseInt(a,10)-parseInt(b,10) )
                                .map( k=>maps[`${orders[k]}`] ));
  }
  return res;
};


/**
 * backtracking
 * @param {number[]}      res     the results containing all permutations
 * @param {number[]}      curs    the current list being permuted
 * @param {number[]}      nums    the numbers to create the permutations
 */
const backtrack = function(res, curs, nums) {
  if (curs.length === nums.length) {
    res.push(JSON.parse(JSON.stringify(curs)));
  } else {
    for (let i = 0; i < nums.length; i++) {
      if (curs.includes(nums[i])) {
        continue ;
      }
      curs.push(nums[i]);
      backtrack(res, curs, nums);
      curs.pop();
    }
  }
};


/**
 * @param {number[]}      nums    the numbers to create the permutations
 * @return {number[][]}           all of the permutations
 */
const permute2 = function(nums) {
  let res = [];
  backtrack(res, [], nums);
  return res;
};


/**
 * 
 * @param {number[]}      nums    the numbers to create the permutations
 * @param {number}        idx     the beginning index to permute
 * @param {number[]}      res     the results containing all permutations
 */
const recursive = function(nums, idx, res) {
  if (idx >= nums.length) {
    res.push(JSON.parse(JSON.stringify(nums)));
    return ;
  }
  for (let i = idx; i < nums.length; i++) {
    let tmp = nums[idx];
    nums[idx] = nums[i];
    nums[i] = tmp;
    recursive(nums, idx + 1, res);
    tmp = nums[idx];
    nums[idx] = nums[i];
    nums[i] = tmp;
  }
};


/**
 * @param {number[]}      nums    the numbers to create the permutations
 * @return {number[][]}           all of the permutations
 */
const permute = function(nums) {
  let res = [];
  recursive(nums, 0, res);
  return res;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0046 - Permutations:');
  [
    [1, 2, 3],
  ].forEach( vs => {
    console.log(`  nums=[${vs.join(', ')}], perms=[${permute(vs).map( p=>`[${p.join(',')}]`).join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
