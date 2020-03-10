/**
 * @param {number}    num     number of LEDs
 * @return {string[]}         all possible times
 */
const readBinaryWatch = function(num) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0401 - Binary Watch:');
  [
    1,
  ].forEach( v => {
    console.log(`  n=${v}, times=${JSON.stringify(readBinaryWatch(v))}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
