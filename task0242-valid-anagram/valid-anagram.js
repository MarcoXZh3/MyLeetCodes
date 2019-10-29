/**
 * @param {string}      s     the 1st string
 * @param {string}      t     the 2nd string
 * @return {boolean}          whether they are anagram or not
 */
const isAnagram = function(s, t) {

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
