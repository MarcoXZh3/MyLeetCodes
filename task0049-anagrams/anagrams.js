/**
 * @param {string[]}    strs    the string list
 * @return {string[][]}         the string groups by anagrams
 */
const groupAnagrams = function(strs) {
  return [[]];
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
