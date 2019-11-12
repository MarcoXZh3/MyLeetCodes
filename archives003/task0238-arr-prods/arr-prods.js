/**
 * brutal force: calculate prod of the rest for every number
 * @param {number[]}    nums    the number array
 * @return {number[]}           the product array
 */
const productExceptSelf0 = function(nums) {
  // return nums.map( (_,i)=>nums.reduce((prod,e,j)=>prod*(i===j?1:e), 1) );
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    let prod = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        prod *= nums[j];
      }
    }
    res.push(prod);
  }
  return res;
};


/**
 * left and right prod list
 * @param {number[]}    nums    the number array
 * @return {number[]}           the product array
 */
const productExceptSelf1 = function(nums) {
  const n = nums.length;
  const ls = Array(n).fill(0);
  const rs = Array(n).fill(0);
  const res = Array(n).fill(0);
  ls[0] = 1;
  for (let i = 1; i < n; i++) {
    ls[i] = nums[i - 1] * ls[i - 1];
  }
  rs[n - 1] = 1;
  for (let i = n - 2; i >= 0; i--) {
    rs[i] = nums[i + 1] * rs[i + 1];
  }
  for (let i = 0; i < n; i++) {
    res[i] = ls[i] * rs[i];
  }
  return res;
};


/**
 * @param {number[]}    nums    the number array
 * @return {number[]}           the product array
 */
const productExceptSelf = function(nums) {
  const n = nums.length;
  const res = Array(n).fill(0);
  res[0] = 1;
  for (let i = 1; i < n; i++) {
    res[i] = nums[i - 1] * res[i - 1];
  }
  let r = 1;
  for (let i = n - 1; i >= 0; i--) {
    res[i] *= r;
    r *= nums[i];
  }
  return res;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0238 - Product of Array Except Self:');
  [
    [1, 2, 3, 4],
    [0, 0],
  ].forEach( vs => {
    console.log(`  nums=[${vs.join(', ')}]; prods=[${productExceptSelf(vs).join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
