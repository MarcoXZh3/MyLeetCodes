/**
 * @param {number[][]}    rectangles    the rectangles
 * @return {boolean}                    whether they cover a rectangular area
 */
const isRectangleCover = function(rectangles) {

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
