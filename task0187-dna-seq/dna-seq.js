const LENGTH = 10;


/**
 * @param {string}        s       the DNA sequence
 * @return {string[]}             all the repeated sub-sequences
 */
const findRepeatedDnaSequences = function(s) {
  return [];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0187 - Repeated DNA Sequences:');
  [
    'AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT',
  ].forEach( v => {
    console.log(`  DNA="${v}"`);
    console.log(`  reps=[${findRepeatedDnaSequences(v).map(x=>`"${x}"`)}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
