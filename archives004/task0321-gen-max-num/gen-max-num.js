/**
 * @param {number[]}    nums1     the 1st group of digits
 * @param {number[]}    nums2     the 2nd group of digits
 * @param {number}      k         the length of the output
 * @return {number[]}             the maximum possible number
 */
const maxNumber = function(nums1, nums2, k) {
  const max1 = (nums, k) => {
    let drop = nums.length - k;
    const re = [];
    for (let num of nums) {
      while (drop && re.length && re[re.length - 1] < num) {
        re.pop();
        drop --;
      }
      re.push(num);
    }
    return re.length > k ? re.slice(0, k) : re.concat(Array(k - re.length).fill(0));
  }
  const max2 = (nums1, nums2) => {
    const re = [];
    while (nums1.length + nums2.length) {
      const cur = nums1.join('') > nums2.join('') ? nums1 : nums2;
      re.push(cur.shift());
    }
    return re;
  };

  const n1 = nums1.length;
  const n2 = nums2.length;
  let re = [];
  for (let i = Math.max(k - n2, 0); i <= Math.min(k, n1); i++) {
    const cur = max2(max1(nums1, i), max1(nums2, k - i));
    re = re.join('') > cur.join('') ? re : cur;
  }
  return re;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0320 - Create Maximum Number:');
  [
    [5, [3, 4, 6, 5], [9, 1, 2, 5, 8, 3]],
    [5, [6, 7], [6, 0, 4]],
    [3, [3, 9], [8, 9]],
  ].forEach( vs => {
    console.log(`  k=${vs[0]}, max=${JSON.stringify(maxNumber(vs[1], vs[2], vs[0]))}`);
    console.log(`  num1=${JSON.stringify(vs[1])}, num2=${JSON.stringify(vs[2])}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
