const VOCABULARY = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';


/**
 * @param {string}    s   Excel column title 
 * @return {number}       number of the title
 */
const titleToNumber = function(s) {
  let re = 0;
  while (s.length > 0) {
    re = re * VOCABULARY.length + s.charCodeAt(0) - VOCABULARY.charCodeAt(0) + 1;
    s = s.substring(1);
  }
  return re;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0171 - Excel Sheet Column Number:');
  [
    'A',
    'AB',
    'ZY',
  ].forEach( v => {
    console.log(`  title="${v}", col=${titleToNumber(v)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
