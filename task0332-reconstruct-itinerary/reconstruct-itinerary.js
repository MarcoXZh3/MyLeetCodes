/**
 * DFS by recursion
 * @param {string[][]}    tickets   the ticket list
 * @return {string[]}               the airport list in order
 */
const findItinerary0 = function(tickets) {
  const dfs = (cur) => {
    while (map[cur] && map[cur].length > 0) {
      dfs(map[cur].shift());
    }
    res.splice(0, 0, cur);
  };

  const map = {};
  for (let t of tickets) {
    let arr = map[t[0]] || [];
    let i = 0;
    while (i < arr.length && t[1] > arr[i]) {
      i ++;
    }
    arr.splice(i, 0, t[1]);
    map[t[0]] = arr;
  }

  const res = [];
  dfs('JFK');
  return res;
};


/**
 * DFS by stack
 * @param {string[][]}    tickets   the ticket list
 * @return {string[]}               the airport list in order
 */
const findItinerary = function(tickets) {
  const map = {};
  for (let t of tickets) {
    let arr = map[t[0]] || [];
    let i = 0;
    while (i < arr.length && t[1] > arr[i]) {
      i ++;
    }
    arr.splice(i, 0, t[1]);
    map[t[0]] = arr;
  }

  const res = [];
  const stack = ['JFK'];
  while (stack.length > 0) {
    while (map[stack[stack.length - 1]] && map[stack[stack.length - 1]].length > 0) {
      stack.push(map[stack[stack.length - 1]].shift());
    }
    res.splice(0, 0, stack.pop());
  }
  return res;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0332 - Reconstruct Itinerary:');
  [
    [ ['MUC', 'LHR'], ['JFK', 'MUC'], ['SFO', 'SJC'], ['LHR', 'SFO'] ],
    [ ['JFK', 'SFO'], ['JFK', 'ATL'], ['SFO', 'ATL'], ['ATL','JFK'], ['ATL','SFO'] ],
    [ ['JFK', 'KUL'], ['JFK', 'NRT'], ['NRT','JFK'] ],
  ].forEach( vs => {
    console.log(`  tickets=${JSON.stringify(vs)}`);
    console.log(`  itinerary=${JSON.stringify(findItinerary(vs))}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
