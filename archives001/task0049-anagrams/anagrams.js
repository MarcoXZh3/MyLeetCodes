/**
 * variant: comparing by char-occurrence of string
 * @param {string[]}    strs    the string list
 * @return {string[][]}         the string groups by anagrams
 */
const groupAnagrams1 = function(strs) {
  // the alphabets
  const ascii = 'a'.charCodeAt(0);
  const chars = [...Array(26).values()].map( (_,i)=>String.fromCharCode(i+ascii) );
  // count char occurrences one by one
  const angs = {};
  for (let str of strs) {
    let hash = {};
    for (let i = 0; i < str.length; i++) {
      const char = str.charAt(i);
      hash[char] = (hash[char] || 0) + 1;
    }
    hash = chars.map( c=>`${hash[c]||0}` ).join(0);
    if (hash in angs) {
      angs[hash].push(str);
    } else {
      angs[hash] = [str];
    }
  }
  return Object.values(angs);
};


/**
 * straight forward: comparing the sorted strings
 * @param {string[]}    strs    the string list
 * @return {string[][]}         the string groups by anagrams
 */
const groupAnagrams = function(strs) {
  const angs = {};
  for (let str of strs) {
    const sorted = str.split('').sort( (a,b)=>a>b?1:-1 ).join('');
    if (sorted in angs) {
      angs[sorted].push(str);
    } else {
      angs[sorted] = [str];
    }
  }
  return Object.values(angs);
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0049 - Group Anagrams:');
  [
    ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'],
  ].forEach( vs => {
    console.log(`  strs=[${vs.map( v=>`"${v}"`).join(', ')}]`);
    console.log(`  angs=[${groupAnagrams(vs).map( p=>`[${p.map( v=>`"${v}"` ).join(',')}]`).join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
