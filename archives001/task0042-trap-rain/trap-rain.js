/**
 * 3 cases by the positions of the highest value
 * @param {number[]}  heights     the height list
 * @return {number}               the rain water these height can trap
 */
const subTrap = function(heights) {
  // step 1: indexing the highest value and the corresponding indexes
  let max = 0;                        // the hightest value
  let maxIdxs = [];                   // indexes of the highest values
  let max2 = 0;                       // the 2nd highest value
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] > max) {
      max2 = max;
      max = heights[i];
      maxIdxs = [i];
    } else if (heights[i] === max) {
      maxIdxs.push(i);
    } else if (heights[i] > max2) {
      max2 = heights[i];
    }
  }
  if (max === 0) {
    return 0;
  }

  let unit = 0;
  // step 2: case discussions
  const midMaxs = maxIdxs.filter( i=>i!==0&&i!==heights.length-1 );
  if (midMaxs.length > 0) {
    // Case 1: at least 1 highest in middle -- split by them
    for (let i = 0; i <= midMaxs.length; i++) {
      const l = i === 0 ? 0 : midMaxs[i - 1];
      const r = i < midMaxs.length ? midMaxs[i] + 1: heights.length;
      unit += subTrap(heights.slice(l, r));
    }
  } else if (maxIdxs.length === 2) {
    // Case 2: has 2 highest and both are edges -- calculate directly
    for (let i = 1; i < heights.length - 1; i++) {
      unit += max - heights[i];
    }
  } else /*if (maxIdxs.length === 1)*/ {
    // Case 3: only 1 highest as edge -- set to 2nd hightest then do the math
    const heightsCp = heights.slice();
    heightsCp[maxIdxs[0]] = max2;
    unit = subTrap(heightsCp);
  }
  return unit;
};


/**
 * @param {number[]}  heights     the height list
 * @return {number}               the rain water these height can trap
 */
const trap1 = function(heights) {
  return subTrap(heights);
};


/**
 * accumulate water and look for next higher wall
 * @param {number[]}  heights     the height list
 * @return {number}               the rain water these height can trap
 */
const trap = function(heights) {
  let unit = 0;
  let l = 0;
  let r = heights.length - 1;
  let maxL = 0;
  let maxR = 0;
  while(l <= r) {
    // the higher value holds still, the lower value accumulates water
    if (heights[l] <= heights[r]) {
      if (heights[l] >= maxL) {     // a higher value becomes the new wall
        maxL = heights[l];
      } else {                      // trapped water determined by each old wall
        unit += maxL - heights[l];
      }
      l++;
    } else {
      if (heights[r] >= maxR) {
        maxR = heights[r];
      } else {
        unit += maxR - heights[r];
      }
      r--;
    }
  }
  return unit;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0042 - Trapping Rain Water:');
  [
    [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1],
    [4, 2, 3],
    [5, 4, 1, 2],
    [5, 2, 1, 2, 1, 5],
  ].forEach( vs => {
    console.log(`  trap=${trap(vs)}; heights=[${vs.join(',')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
