/**
 * @param {string}    s   the larger string
 * @param {string}    t   the smaller string
 * @return {number}       how many subsequences available
 */
const numDistinct = function(s, t) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0115 - Distinct Subsequences:');
  [
    ['rabbbit', 'rabbit'],
    ['babgbag', 'bag'],
  ].forEach( vs => {
    console.log(`  cnt=${numDistinct(vs[0], vs[1])}, s="${vs[0]}", t="${vs[1]}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
