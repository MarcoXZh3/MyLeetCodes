/**
 * @param {number[][]}    envelopes   the size list of the envelopes
 * @return {number}                   max number of envelopes in a stack
 */
const maxEnvelopes = function(envelopes) {
  if (!envelopes || envelopes.length === 0) {
    return 0;
  }
  cp = envelopes.slice().sort( (a,b)=>a[0]===b[0]?a[1]-b[1]:a[0]-b[0] );
  const dp = Array(cp.length).fill(1);
  let max = dp[0];
  for (let i = 1; i < cp.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (cp[i][0] > cp[j][0] && cp[i][1] > cp[j][1]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    max = Math.max(max, dp[i]);
  }
  return max;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0354 - Russian Doll Envelopes:');
  [
    [ [5, 4], [6, 4], [6, 7], [2, 3] ],
    [ [10, 8], [1, 12], [6, 15], [2, 18] ],
    [ [7, 8], [12, 16], [12, 5], [1, 8], [4, 19], [3, 15], [4, 10], [9, 16] ],
  ].forEach( vs => {
    console.log(`  max=${maxEnvelopes(vs)}, envelopes=${JSON.stringify(vs)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
