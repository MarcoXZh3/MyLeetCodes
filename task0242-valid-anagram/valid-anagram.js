/**
 * sort and compare
 * @param {string}      s     the 1st string
 * @param {string}      t     the 2nd string
 * @return {boolean}          whether they are anagram or not
 */
const isAnagram0 = function(s, t) {
  return s.length !== t.length ? false :
            s.split('').sort( (a,b)=>a>b?1:-1 ).join('') ===
            t.split('').sort( (a,b)=>a>b?1:-1 ).join('');
};


/**
 * count chars and compare
 * @param {string}      s     the 1st string
 * @param {string}      t     the 2nd string
 * @return {boolean}          whether they are anagram or not
 */
const isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const map = {};
  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i);
    map[char] = (map[char] || 0) + 1;
    char = t.charAt(i);
    map[char] = (map[char] || 0) - 1;
  }
  for (let char in map) {
    if (map[char] !== 0) {
      return false;
    }
  }
  return true;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0242 - Valid Anagram:');
  [
    ['anagram', 'nagaram'],
    ['rat', 'car'],
  ].forEach( vs => {
    console.log(`  re=${isAnagram(vs[0], vs[1])}, s="${vs[0]}", t="${vs[1]}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
