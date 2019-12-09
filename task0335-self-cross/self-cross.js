/**
 * brutal force: collect and compare all passed points
 * @param {number[]}      x       the steps to go
 * @return {boolean}              whether cross self or not
 */
const isSelfCrossing0 = function(x) {
  const dirs = [ [1, 0], [0, -1], [-1, 0], [0, 1] ];
  const points = [[0, 0]];
  for (let i = 0; i < x.length; i++) {
    const dir = dirs[i % dirs.length];
    for (let j = 0; j < x[i]; j++) {
      const prev = points[points.length - 1];
      const cur = [prev[0] + dir[0], prev[1] + dir[1]];
      if (points.find(p=>p[0]===cur[0]&&p[1]===cur[1] )) {
        return true;
      }
      points.push(cur);
    }
  }
  return false;
};


/**
 * @param {number[]}      x       the steps to go
 * @return {boolean}              whether cross self or not
 */
const isSelfCrossing1 = function(x) {
  for (let i = 3; i < x.length; i++) {
    if (x[i] >= x[i-2] && x[i-1] <= x[i-3]) {
      return true;
    }
    if (i >= 4 && x[i-1] === x[i-3] && x[i] + x[i-4] >= x[i-2]) {
      return true;
    }
    if (i >= 5 && x[i-2] >= x[i-4] && x[i] >= x[i-2]-x[i-4] && x[i-1] >= x[i-3]-x[i-5] && x[i-1] <= x[i-3]) {
      return true;
    }
  }
  return false;
};


/**
 * @param {number[]}      x       the steps to go
 * @return {boolean}              whether cross self or not
 */
const isSelfCrossing = function(x) {
  let b = 0;
  let c = 0;
  let d = 0;
  let e = 0;
  let f = 0;
  for (let a of x) {
    if (d >= b && b > 0 && (a >= c || a >= c - e && c - e >= 0 && f >= d - b)) {
      return true;
    }
    f = e;
    e = d;
    d = c;
    c = b;
    b = a;
  }
  return false;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0335 - Self Crossing:');
  [
    [2, 1, 1, 2],
    [1, 2, 3, 4],
    [1, 1, 1, 1],
    [3, 3, 4, 2, 2],
    [1, 1, 2, 1, 1],
  ].forEach( vs => {
    console.log(`  cross=${isSelfCrossing(vs)}, steps=${JSON.stringify(vs)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
