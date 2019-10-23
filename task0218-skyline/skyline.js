/**
 * @param {number[][]}      buildings     the building coordinates
 * @return {number[][]}                   the skyline coordinates
 */
const getSkyline = function(buildings) {
  const enqueue = (pq, val) => {
    pq.push(val);
    let c = pq.length - 1;
    let p = Math.floor((c - 1) / 2);
    while (p >= 0 && pq[p] < pq[c]) {
      const tmp = pq[p];
      pq[p] = pq[c];
      pq[c] = tmp;
      c = p;
      p = Math.floor((c - 1) / 2);
    }
  };

  const dequeue = (pq, val) => {
    let p = pq.indexOf(val);
    if (p < 0) {
      return ;
    }
    pq[p] = pq.pop();
    while (true) {
      let max = p;
      let c = max * 2 + 1;
      if (c < pq.length && pq[max] < pq[c]) {
        max = c;
      }
      c ++;
      if (c < pq.length && pq[max] < pq[c]) {
        max = c;
      }
      if (max === p) {
        break ;
      }
      const tmp = pq[max];
      pq[max] = pq[p];
      pq[p] = tmp;
      p = max;
    }
  };

  const res = [];
  let heights = [];
  for (let b of buildings) {
    heights.push([b[0], -b[2]]);
    heights.push([b[1], b[2]]);
  }
  heights = heights.sort( (a,b)=>a[0]===b[0]?a[1]-b[1]:a[0]-b[0] );
  const pq = [0];   // max priority queue
  let prev = 0;
  for (let h of heights) {
    if (h[1] < 0) {
      enqueue(pq, -h[1]);
    } else {
      dequeue(pq, h[1]);
    }
    let cur = pq[0];
    if (prev != cur) {
      res.push([h[0], cur]);
      prev = cur;
    }
  }
  return res;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0218 - The Skyline Problem:');
  [
    [ [2, 9, 10], [3, 7, 15], [5, 12, 12], [15, 20, 10], [19, 24, 8] ],
  ].forEach( vs => {
    console.log(`  dots=[${vs.map( r=>`[${r.join(', ')}]`).join(', ')}]`);
    const skyline = getSkyline(vs);
    console.log(`  dots=[${skyline.map( r=>`[${r.join(', ')}]`).join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
