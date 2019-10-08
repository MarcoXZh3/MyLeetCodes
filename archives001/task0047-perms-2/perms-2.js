/**
 * depth first search
 * @param {number[]}      nums    the numbers to create the permutations
 * @param {boolean[]}     used    the flags of whether the number is used or not
 * @param {number[]}      curs    the current list of numbers
 * @param {number[][]}    res     all of the permutations
 */
const dfs = function(nums, used, curs, res) {
  if (curs.length === nums.length) {
    res.push(JSON.parse(JSON.stringify(curs)));
    return ;
  }
  for (let i = 0; i < nums.length; i++) {
    if (used[i] || i > 0 && nums[i - 1] === nums[i] && !used[i - 1]) {
      continue ;
    }
    used[i] = true;
    curs.push(nums[i]);
    dfs(nums, used, curs, res);
    used[i] = false;
    curs.pop();
  }
};


/**
 * @param {number[]}      nums    the numbers to create the permutations
 * @return {number[][]}           all of the permutations
 */
const permuteUnique = function(nums) {
  let res = [];
  if (!nums || nums.length === 0) {
    return [];
  }
  nums = nums.sort( (a,b)=>a-b );
  dfs(nums, Array(nums.length).fill(0), [], res);
  return res;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0047 - Permutations II:');
  [
    [1, 1, 2],
  ].forEach( vs => {
    console.log(`  nums=[${vs.join(', ')}], perms=[${permuteUnique(vs).map( p=>`[${p.join(',')}]`).join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
