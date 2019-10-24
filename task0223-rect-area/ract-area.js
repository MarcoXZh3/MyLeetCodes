/**
 * @param {number}    A     x of bottom left point of the 1st rectangle
 * @param {number}    B     y of bottom left point of the 1st rectangle
 * @param {number}    C     x of top right point of the 1st rectangle
 * @param {number}    D     y of top right point of the 1st rectangle
 * @param {number}    E     x of bottom left point of the 2nd rectangle
 * @param {number}    F     y of bottom left point of the 2nd rectangle
 * @param {number}    G     x of top right point of the 2nd rectangle
 * @param {number}    H     y of top right point of the 2nd rectangle
 * @return {number}         the total area the two rectangles covers
 */
const computeArea = function(A, B, C, D, E, F, G, H) {
  const xl = Math.max(A, E);
  const xr = Math.min(C, G);
  const yb = Math.max(B, F);
  const yt = Math.min(D, H);
  const w = Math.max(0, xr - xl);
  const h = Math.max(0, yt - yb);
  // areas of the two rectangle minus the area of the overlapped part
  return (C - A) * (D - B) + (G - E) * (H - F) - w * h;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0223 - Rectangle Area:');
  [
    [-3, 0, 3, 4, 0, -1, 9, 2],
  ].forEach( vs => {
    console.log(`  A1=(${vs[0]}, ${vs[1]}), A2=(${vs[2]}, ${vs[3]})`);
    console.log(`  B1=(${vs[4]}, ${vs[5]}), B2=(${vs[6]}, ${vs[7]})`);
    console.log(`  area=${computeArea(...vs)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
