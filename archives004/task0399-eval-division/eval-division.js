/**
 * @param {string[][]}    equations     equation strings
 * @param {number[]}      values        value array
 * @param {string[][]}    queries       query strings
 * @return {number[]}                   eval results
 */
const calcEquation = function(equations, values, queries) {
  const find = (s) => {
    if (!(s in root)) {
      root[s] = s;
      dist[s] = 1.0;
      return s;
    } else if (root[s] === s) {
      return s;
    }
    const last = root[s];
    const p = find(last);
    root[s] = p;
    dist[s] *= dist[last];
    return p;
  };

  const res = [];
  const root = {};
  const dist = {};
  for (let i = 0; i < equations.length; i++) {
    const r1 = find(equations[i][0]);
    const r2 = find(equations[i][1]);
    root[r1] = r2;
    dist[r1] = dist[equations[i][1]] * values[i] / dist[equations[i][0]];
  }
  for (let i = 0; i < queries.length; i++) {
    if (!(queries[i][0] in root) || !(queries[i][1] in root)) {
      res[i] = -1.0;
      continue ;
    }
    const r1 = find(queries[i][0]);
    const r2 = find(queries[i][1]);
    if (r1 !== r2) {
      res[i] = -1.0;
      continue ;
    }
    res[i] = dist[queries[i][0]] / dist[queries[i][1]];
  }
  return res;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0399 - Evaluate Division:');
  [
    [
      [ ['a', 'b'], ['b', 'c'] ],
      [2.0, 3.0],
      [ ['a', 'c'], ['b', 'a'], ['a', 'e'], ['a', 'a'], ['x', 'x'] ],
    ]
  ].forEach( vs => {
    const re = calcEquation(...vs);
    console.log(`  eq=${JSON.stringify(vs[0])}, vals=${JSON.stringify(vs[1])}`);
    console.log(`  qs=${JSON.stringify(vs[2])}, res=${JSON.stringify(re)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
