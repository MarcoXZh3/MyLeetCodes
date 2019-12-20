/**
 * @param {number[][]}    rectangles    the rectangles
 * @return {boolean}                    whether they cover a rectangular area
 */
const isRectangleCover = function(rectangles) {
  if (!rectangles || rectangles.length === 0 || rectangles[0].length === 0) {
    return false;
  }
  let x1 = Number.MAX_SAFE_INTEGER;
  let y1 = Number.MAX_SAFE_INTEGER;
  let x2 = Number.MIN_SAFE_INTEGER;
  let y2 = Number.MIN_SAFE_INTEGER;
  const set = new Set();
  let area = 0;
  for (let rect of rectangles) {
    x1 = Math.min(rect[0], x1);
    y1 = Math.min(rect[1], y1);
    x2 = Math.max(rect[2], x2);
    y2 = Math.max(rect[3], y2);
    area += (rect[2] - rect[0]) * (rect[3] - rect[1]);
    const s1 = rect[0] + ' ' + rect[1];
    const s2 = rect[0] + ' ' + rect[3];
    const s3 = rect[2] + ' ' + rect[3];
    const s4 = rect[2] + ' ' + rect[1];
    set.has(s1) ? set.delete(s1) : set.add(s1);
    set.has(s2) ? set.delete(s2) : set.add(s2);
    set.has(s3) ? set.delete(s3) : set.add(s3);
    set.has(s4) ? set.delete(s4) : set.add(s4);
  }
  if (!set.has(x1 + ' ' + y1) || !set.has(x1 + ' ' + y2) ||
      !set.has(x2 + ' ' + y1) || !set.has(x2 + ' ' + y2) ||
      set.size !== 4) {
    return false;
  }
  return area === (x2 - x1) * (y2 - y1);
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0391 - Perfect Rectangle:');
  [
    [
      [1, 1, 3, 3],
      [3, 1, 4, 2],
      [3, 2, 4, 4],
      [1, 3, 2, 4],
      [2, 3, 3, 4],
    ],
    [
      [1, 1, 2, 3],
      [1, 3, 2, 4],
      [3, 1, 4, 2],
      [3, 2, 4, 4],
    ],
    [
      [1, 1, 3, 3],
      [3, 1, 4, 2],
      [1, 3, 2, 4],
      [3, 2, 4, 4],
    ],
    [
      [1, 1, 3, 3],
      [3, 1, 4, 2],
      [1, 3, 2, 4],
      [2, 2, 4, 4],
    ],
  ].forEach( vs => {
    vs.forEach( rect => {
      console.log(`  ${JSON.stringify(rect)}`);
    })
    console.log(`  cover=${isRectangleCover(vs)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
