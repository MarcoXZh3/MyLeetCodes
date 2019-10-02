/**
 * @param {number}    n     number to be converted
 * @return {string}         the converted title
 */
const convertToTitle = function(n) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0168 - Excel Sheet Column Title:');
  [
    1,
    28,
    701,
  ].forEach( v => {
    console.log(`  num=${v}, col="${convertToTitle(v)}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
