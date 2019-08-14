/**
 * @param {number[]}    heights   heights of each unit
 * @return {number}               max rectangle in the histogram
 */
const largestRectangleArea0 = function(heights) {
  if (!heights || heights.length === 0) {
    return 0;
  }
  const fromLeft = Array(heights.length).fill(0);
  fromLeft[0] = -1;
  const fromRight = Array(heights.length).fill(0);
  fromRight[heights.length - 1] = heights.length;
  for (let i = 1; i < heights.length; i++) {
    let prev = i - 1;
    while (prev >= 0 && heights[prev] >= heights[i]) {
      prev = fromLeft[prev];
    }
    fromLeft[i] = prev;
  }
  for (let i = heights.length - 2; i >= 0; i--) {
    let next = i + 1;
    while (next < heights.length && heights[next] >= heights[i]) {
      next = fromRight[next];
    }
    fromRight[i] = next;
  }
  let max = 0;
  for (let i = 0; i < heights.length; i++) {
    const area = heights[i] * (fromRight[i] - fromLeft[i] - 1);
    max = max > area ? max : area;
  }
  return max;
};


/**
 * stack based solution: https://www.geeksforgeeks.org/largest-rectangle-under-histogram/
 * @param {number[]}    heights   heights of each unit
 * @return {number}               max rectangle in the histogram
 */
const largestRectangleArea = function(heights) {
  const stack = [];
  let max = 0;
  for (let i = 0; i <= heights.length; i++) {
    let h = heights[i] || 0;
    if (stack.length === 0 || h >= heights[stack[0]]) {
      stack.unshift(i);
    } else {
      const area = heights[stack.shift()] * (stack.length === 0 ? i : i - 1 - stack[0]);
      max = max > area ? max : area;
      i --;
    }
  }
  return max;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0084 - Largest Rectangle in Histogram:');
  [
    [2, 1, 5, 6, 2, 3],
  ].forEach( vs => {
    console.log(`  max=${largestRectangleArea(vs)}; hist=[${vs.join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
