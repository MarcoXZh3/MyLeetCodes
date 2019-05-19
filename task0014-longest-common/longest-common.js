/**
 * @param {string[]}    strs    the string to search
 * @return {string}             the longest common prefix
 */
const longestCommonPrefix = function(strs) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0014 - Roman to Integer:');
  [
    ['flower', 'flow', 'flight'],
    ['dog', 'racecar', 'car'],
  ].forEach( vs => {
    console.log(`  re=${longestCommonPrefix(vs)}, strs=[${vs.map(x=>`"${x}"`).join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
