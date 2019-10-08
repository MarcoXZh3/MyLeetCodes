const VOCABULARY = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';


/**
 * iteration
 * @param {number}    n     number to be converted
 * @return {string}         the converted title
 */
const convertToTitle0 = function(n) {
  const CODE = VOCABULARY.charCodeAt(0);
  let re = '';
  while (n > 0) {
    n --;
    re = String.fromCharCode(CODE + (n % VOCABULARY.length)) + re;
    n = Math.floor(n / VOCABULARY.length);
  }
  return re;
};


/**
 * recursion
 * @param {number}    n     number to be converted
 * @return {string}         the converted title
 */
const convertToTitle = function(n) {
  const CODE = VOCABULARY.charCodeAt(0);
  const recursion = (n) => {
    return n === 0 ? '' :
                     recursion(Math.floor(--n / VOCABULARY.length)) +
                     String.fromCharCode(CODE + (n % VOCABULARY.length));
  };
  return recursion(n);
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
