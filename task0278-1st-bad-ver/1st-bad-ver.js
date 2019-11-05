/**
 * @param {function}    isBadVersion    the API to check if a version is bad
 *      @param {integer}      version       a version number to check
 *      @return {boolean}                   whether the version is bad
 * @return {function}                   the API to find the 1st bad version
 */
const solution = function (isBadVersion) {
  /**
   * @param {integer}   n   Total number of versions
   * @return {integer}      The first bad version
   */
  return function (n) {
    let l = 1;
    let r = n;
    while (l < r) {
      let m = Math.floor((l + r) / 2);
      if (isBadVersion(m)) {
        r = m;
      } else {
        l = m + 1;
      }
    }
    return l;
  };
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0278 - First Bad Version:');
  [
    [5, 4],
  ].forEach( vs => {
    const isBadVersion = (x) => x >= vs[1];
    const func = new solution(isBadVersion);
    console.log(`  n=${vs[0]}, 1st=${func(vs[0])}`);
    console.log(`  isBadVersion="${isBadVersion.toString().replace('vs[1]', vs[1])}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
