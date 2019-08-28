/**
 * brutal force with two-level iteration
 * @param {number[]}    height    the list of heights
 * @return {number}               the max area
 */
const maxArea1 = function(height) {
  let max = 0;
  for(let i = 0; i < height.length - 1; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const area = Math.min(height[i], height[j]) * (j - i);
      if (max < area) {
        max = area;
      }
    }
  }
  return max;
};


/**
 * two pointer: keep larger height; look for a better shorter height
 * @param {number[]}    height    the list of heights
 * @return {number}               the max area
 */
const maxArea = function(height) {
  let max = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    if (max < area) {
      max = area;
    }

    // the next possible solution will never use the shorter of current pair
    if (height[left] > height[right]) {
      right --;
    } else {
      left ++;
    }
  }
  return max;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0011 - Container With Most Water:');
  [
    [1, 8, 6, 2, 5, 4, 8, 3, 7],
  ].forEach( vs => {
    console.log(`  max="${maxArea(vs)}", heights=[${vs.join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
