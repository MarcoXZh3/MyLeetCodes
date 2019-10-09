/**
 * @param {string}      s     the 1st string
 * @param {string}      t     the 2nd string
 * @return {boolean}          whether isomorphic or not
 */
const isIsomorphic = function(s, t) {

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
  ].forEach( vs => {
    console.log(`  isomorphic=${isIsomorphic(vs[0], vs[1])}, s="${vs[0]}", t="${vs[1]}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
