/**
 * linear search: index from 0 to end
 * @param {string[]}    strs    the string to search
 * @return {string}             the longest common prefix
 */
const longestCommonPrefix1 = function(strs) {
  if (strs.length === 0) {
    return '';
  }
  let idx = 0;
  while (true) {
    let char = '';
    for (let i = 0; i < strs.length; i++) {
      if (idx >= strs[i].length || (char && char !== strs[i].charAt(idx))) {
        return strs[i].substring(0, idx);
      }
      char = strs[i].charAt(idx);
    }
    idx ++;
  }
};


/**
 * binary search: index from middle to one of the two sides
 * @param {string[]}    strs    the string to search
 * @return {string}             the longest common prefix
 */
const longestCommonPrefix = function(strs) {
  if (strs.length === 0) {
    return '';
  }
  let right = strs[0].length;
  let left = 0;
  while (left <= right) {
    let char = '';
    const idx = Math.floor((right + left) / 2);
    let equal = true;
    for (let i = 0; i < strs.length; i++) {
      if (idx >= strs[i].length || (char && char !== strs[i].charAt(idx))) {
        equal = false;
        break;
      }
      char = strs[i].charAt(idx);
    }
    equal ? left = idx + 1 : right = idx - 1;
  }
  return strs[0].substring(0, left);
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0014 - Longest Common Prefix:');
  [
    ['flower', 'flow', 'flight'],
    ['dog', 'racecar', 'car'],
    ['aa', 'ab'],
  ].forEach( vs => {
    console.log(`  re="${longestCommonPrefix(vs)}", strs=[${vs.map(x=>`"${x}"`).join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
