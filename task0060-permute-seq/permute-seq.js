/**
 * recursively generate the permutations
 * @param {number[]}  nums    numbers for the permutations
 * @param {object}    cnt     the counter object which maintains the n and k
 * @param {number[]}  cur     the current permutation
 */
const recursive = function(nums, cnt, cur) {
  if (cur.length === cnt.n) {
    cnt.k --;
    return cnt.k <= 0 ? cur : null;
  }

  for (let i = 0; i < nums.length; i++) {
    cur.push(nums.splice(i, 1)[0]);
    const re = recursive(nums, cnt, cur);
    if (re) {
      return re;
    }
    nums.splice(i, 0, cur.pop());
  }
};


/**
 * straightforward: recursively check all of the permutations
 * @param {number}    n   number of digits
 * @param {number}    k   the kth permutation
 * @return {string}       the string version of the kth permutation
 */
const getPermutation0 = function(n, k) {
  return recursive([...Array(n).keys()].map( (_,i)=>i+1 ), {n:n, k:k}, []).join('');
};


/**
 * skip m! permutations
 * @param {number}    n   number of digits
 * @param {number}    k   the kth permutation
 * @return {string}       the string version of the kth permutation
 */
const getPermutation1 = function(n, k) {
  // nums must be sorted
  const nums = [...Array(n).keys()].map( (_,i)=>i+1 );
  if (k === 1) {
    return nums.join('');
  }

  // Step 1: find the max m where m! < k
  let mFac = 1;
  let m = 1;
  while (mFac < k) {
    mFac *= ++m;
  }
  mFac /= m--;

  // Step 2: skip m! permutations for x times where m!*x <= k and m!*(x+1) > k
  const k1 = Math.ceil(k / mFac);
  const part1 = recursive(nums.slice(), {n:n-m, k:k1}, []);

  // Step 3: check every permutation from m!*x+1 until k
  const k2 = k % mFac || mFac;
  const part2 = recursive(nums.filter( x=>!part1.includes(x) ), {n:m, k:k2}, []);

  return part1.concat(part2).join('');
};


/**
 * ultimate version of skipping m! permutations
 * @param {number}    n   number of digits
 * @param {number}    k   the kth permutation
 * @return {string}       the string version of the kth permutation
 */
const getPermutation = function(n, k) {
  let re = '';
  const nums = [];
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
    nums.push(i);
  }
  k --;
  for (let i = 0; i < n; i++) {
    fact /= n - i;
    let idx = Math.floor(k / fact);
    re += `${nums.splice(idx, 1)[0]}`;
    k -= idx * fact;
  }
  return re;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0060 - Permutation Sequence:');
  [
    [3, 3],
    [4, 9],
    [1, 1],
    [2, 2],
    [3, 4],
  ].forEach( vs => {
    console.log(` n=${vs[0]}, k=${vs[1]}, re=${getPermutation(vs[0], vs[1])}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
