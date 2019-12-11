/**
 * hash map
 * @param {number[]}      nums1     the 1st number list
 * @param {number[]}      nums2     the 2nd number list
 * @return {number[]}               the intersection
 */
const intersect0 = function(nums1, nums2) {
  const map = {};
  const res = [];
  for (let i = 0; i < nums1.length; i++) {
    const k = `${nums1[i]}`;
    map[k] = 1 + (map[k] || 0);
  }
  for (let i = 0; i < nums2.length; i++) {
    const k = `${nums2[i]}`;
    if (map[k]) {
      res.push(nums2[i]);
      map[k] --;
    }
  }
  return res;
};


/**
 * two pointers
 * @param {number[]}      nums1     the 1st number list
 * @param {number[]}      nums2     the 2nd number list
 * @return {number[]}               the intersection
 */
const intersect = function(nums1, nums2) {
  nums1 = nums1.sort( (a,b)=>a-b );
  nums2 = nums2.sort( (a,b)=>a-b );
  const res = [];
  let i = 0;
  let j = 0;
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] > nums2[j]) {
      j ++;
    } else if (nums1[i] < nums2[j]) {
      i ++;
    } else {
      res.push(nums1[i]);
      i ++;
      j ++;
    }
  }
  return res;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0350 - Intersection of Two Arrays II:');
  [
    [ [1, 2, 2, 1], [2, 2] ],
    [ [4, 9, 5], [9, 4, 9, 8, 4] ],
  ].forEach( vs => {
    console.log(`  nums1=${JSON.stringify(vs[0])}, nums2=${JSON.stringify(vs[1])}`);
    console.log(`  intersection=${JSON.stringify(intersect(vs[0], vs[1]))}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
