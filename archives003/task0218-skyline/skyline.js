/**
 * @param {number[][]}      buildings     the building coordinates
 * @return {number[][]}                   the skyline coordinates
 */
const getSkyline = function(buildings) {
  const compare = (a, b) => a[2]===b[2]?b[1]-a[1]:b[2]-a[2];
  const heapPush = (heap, el) => {
    heap.push(el);
    let c = heap.length - 1;
    let p = Math.floor((c - 1) / 2);
    while (p >= 0 && compare(heap[c], heap[p]) < 0) {
      const tmp = heap[c];
      heap[c] = heap[p];
      heap[p] = tmp;
      c = p;
      p = Math.floor((c - 1) / 2);
    }
  };
  const heapPop = (heap) => {
    if (heap.length === 1) {
      return heap.pop();
    }
    const head = heap[0];
    heap[0] = heap.pop();
    let cur = 0;
    while (true) {
      let c = 2 * cur + 1;
      let max = cur;
      if (c < heap.length && compare(heap[c], heap[max]) < 0) {
        max = c;
      }
      c ++;
      if (c < heap.length && compare(heap[c], heap[max]) < 0) {
        max = c;
      }
      if (max === cur) {
        break ;
      }
      let tmp = heap[cur];
      heap[cur] = heap[max];
      heap[max] = tmp;
      cur = max;
    }
    return head;
  };

  const res = [];
  let i = 0;
  let pos = 0;
  let height = 0;
  let heap = [];
  while (i < buildings.length || heap.length > 0) {
    pos = heap.length === 0 ? buildings[i][0] : heap[0][1];
    if (i >= buildings.length || buildings[i][0] > pos) {
      while (heap.length > 0 && heap[0][1] <= pos) {
        heapPop(heap);
      }
    } else {
      pos = buildings[i][0];
      while (i < buildings.length && buildings[i][0] === pos) {
        heapPush(heap, buildings[i ++]);
      }
    }
    height = heap.length === 0 ? 0 : heap[0][2];
    if (res.length === 0 || res[res.length - 1][1] !== height) {
      res.push([pos, height]);
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
