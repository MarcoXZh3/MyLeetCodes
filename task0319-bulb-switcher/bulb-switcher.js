/**
 * @param {number}      n     how many bulbs
 * @return {number}           how many bulbs are on after all rounds
 */
const bulbSwitch = function(n) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0319 - Bulb Switcher:');
  [
    3
  ].forEach( v => {
    console.log(`  n=${v}; on=${bulbSwitch(v)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
