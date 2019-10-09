/**
 * @param {string}      s     the 1st string
 * @param {string}      t     the 2nd string
 * @return {boolean}          whether isomorphic or not
 */
const isIsomorphic = function(s, t) {
  const isomorphic = (s, t) => {
    const offsets = {};
    for (let i = 0; i < s.length; i++) {
      const k = s.charAt(i);
      const v = t.charAt(i);
      if (offsets[k] && offsets[k] !== v) {
        return false;
      }
      offsets[k] = v;
    }
    return true;
  };
  return isomorphic(s, t) && isomorphic(t, s);
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0205 - Isomorphic Strings:');
  [
    ['egg', 'add'],
    ['foo', 'bar'],
    ['paper', 'title'],
    ['aa', 'ab'],
    ['ab', 'aa'],
  ].forEach( vs => {
    console.log(`  isomorphic=${isIsomorphic(vs[0], vs[1])}, s="${vs[0]}", t="${vs[1]}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
