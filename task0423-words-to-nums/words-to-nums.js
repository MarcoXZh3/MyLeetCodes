/**
 * @param {string}    s     the scrambled words of numbers
 * @return {string}         the numbers
 */
const originalDigits = function(s) {
  const cnt = Array(10).fill(0);
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    if (char === 'z')   cnt[0] ++;
    if (char === 'w')   cnt[2] ++;
    if (char === 'x')   cnt[6] ++;
    if (char === 's')   cnt[7] ++;
    if (char === 'g')   cnt[8] ++;
    if (char === 'u')   cnt[4] ++;
    if (char === 'f')   cnt[5] ++;
    if (char === 'h')   cnt[3] ++;
    if (char === 'i')   cnt[9] ++;
    if (char === 'o')   cnt[1] ++;
  }
  cnt[7] -= cnt[6];
  cnt[5] -= cnt[4];
  cnt[3] -= cnt[8];
  cnt[9] -= cnt[8] + cnt[5] + cnt[6];
  cnt[1] -= cnt[0] + cnt[2] + cnt[4];
  let re = '';
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < cnt[i]; j++) {
      re += `${i}`;
    }
  }
  return re;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0423 - Reconstruct Original Digits from English:');
  [
    'owoztneoer',
    'fviefuro',
  ].forEach( v => {
    console.log(`  str="${v}", nums="${originalDigits(v)}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
