/**
 * do an N-sum check: runs out memory very fast
 * @param {number[]}  nums      the sorted numbers list
 * @param {integer}   l         index of the left boundary
 * @param {integer}   r         index of the right boundary
 * @param {number}    target    the sum to find
 * @param {integer}   n         how many elements for sum
 * @param {number[]}  res0      the current partail solution
 * @param {number[]}  res1      all possible solutions
 */
const nSum = function(nums, l, r, target, n, res0, res1) {
  // terminate in the following cases
  if (r - l + 1 < n ||          // not enough nums left
      nums[l] * n > target ||   // all nums too big
      nums[r] * n < target) {   // all nums to small
    return ;
  }

  if (n === 2) {    // 2-sum: approach num1 from left and num2 from right to sum
    while (l < r) {
      const num1 = nums[l];
      const num2 = nums[r];
      const sum = num1 + num2;
      if (sum < target) {
        l++;
      } else if (sum > target) {
        r++;
      } else {
        res1.push(res0.concat([num1, num2]));
        while (++l < r && num1 === nums[l]) ;     // skip same num1s
      }
    }
  } else {          // N-sum recursion
    for (let i = l; i <= r; i++) {
      if (i > l && nums[i] === nums[i - 1]) {     // skip same num0s
        continue;
      }
      nSum(nums, i+1, r, target-nums[i], n-1, res0.concat([nums[i]]), res1);
    }
  }
};


/**
 * @param {number[]}      nums      the list of numbers
 * @param {number}        target    the target of sum
 * @return {number[][]}             all possible solutions
 */
const fourSum = function(nums, target) {
  if (nums.length < 4) {
    return [];
  }
  nums = nums.sort( (a,b)=>a-b );
  const res = [];
  // nSum(nums, 0, nums.length - 1, target, 4, [], res);

  // 3 layers: num1; num2; num3 & num4
  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue ;
    }
    const num1 = nums[i];
    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue ;
      }
      const num2 = nums[j];
      let k = j + 1;
      let l = nums.length - 1;
      while (k < l) {
        const num3 = nums[k];
        const sum3 = target - num1 - num2 - num3;
        const num4 = nums[l];
        if (num4 < sum3) {
          k++;
        } else if (num4 > sum3) {
          l--;
        } else {
          res.push([num1, num2, num3, num4]);
          while (++k < l && num3 === nums[k]) ;
        }
      }
    }
  }
  return res;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0018 - 4 Sum:');
  [
    [[1, 0, -1, 0, -2, 2], 0],
  ].forEach( vs => {
    const res = fourSum(vs[0]);
    console.log(`  target=${vs[1]}, nums=[${vs[0].join(', ')}]`);
    console.log(`  res=[ ${res.map(x=>`[${x.join(', ')}]`).join(', ')} ]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
