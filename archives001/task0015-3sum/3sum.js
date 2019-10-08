/**
 * @param {number[]}      nums      the list of numbers
 * @return {number[][]}             all possible solutions
 */
const threeSum = function(nums) {
  const res = [];
  const sum3 = 0;
  nums = nums.sort( (a,b)=>a-b );
  // loop all num1s
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {   // skip same num1s
      continue;
    }
    const num1 = nums[i];
    const sum2 = sum3 - num1;
    let j = i + 1;
    let k = nums.length - 1;
    // approaching num2 and num3 to sum2
    while (j < k) {
      const num2 = nums[j];
      const num3 = nums[k];
      if (num2 + num3 < sum2) {
        j++;
      } else if (num2 + num3 > sum2) {
        k--;
      } else {
        res.push([num1, num2, num3]);
        while (j < k && nums[++j] === num2) ; // skip same num2s
        while (j < k && nums[--k] === num3) ; // skip same num3s
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
  console.log('Task 0015 - 3 Sum:');
  [
    [-1, 0, 1, 2, -1, -4],
    [0, 0, 0],
    [-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6],
  ].forEach( vs => {
    const res = threeSum(vs);
    console.log(`  source=[${vs.join(', ')}]`);
    console.log(`  res=[ ${res.map(x=>`[${x.join(', ')}]`).join(', ')} ]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
