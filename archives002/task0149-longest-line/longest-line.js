/**
 * grab each pair of points and count the rest points of how many lie on the
 * same line by the line slope ( (y1 - y2) : (x1 - x2) )
 * @param {number[][]}  points    coordinates of the points
 * @return {number}               max number of points in one line
 */
const maxPoints = function(points) {
  const GCD = (a, b) => b === 0 ? a : GCD(b, a % b);

  if (!points || points.length === 0) {
    return 0;
  } else if (points.length === 1) {
    return 1;
  }

  let re = 0;
  for (let i = 0; i < points.length; i++) {
    const map = {};
    let overlap = 0;
    let max = 0;
    for (let j = i + 1; j < points.length; j++) {
      let x = points[j][0] - points[i][0];
      let y = points[j][1] - points[i][1];
      if (x === 0 && y === 0) {
        overlap ++;
        continue ;
      }

      // reduce the fraction of y / x
      const gcd = GCD(x, y);
      if (gcd !== 0) {
        x /= gcd;
        y /= gcd;
      }
      x = `${x}`;
      y = `${y}`;

      map[x] = map[x] || {};
      map[x][y] = (map[x][y] || 0) + 1;
      max = Math.max(max, map[x][y]);
    }
    re = Math.max(re, max + overlap + 1);
  }
  return re;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0149 - Max Points on a Line:');
  [
    [ [1, 1], [2, 2], [3, 3] ],
    [ [1, 1], [3, 2], [5, 3], [4, 1], [2, 3], [1, 4]],
  ].forEach( vs => {
    console.log(`  max=${maxPoints(vs)}, pts=[${vs.map( ps=>`[${ps.join(', ')}]`).join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
