const LENGTH = 10;


/**
 * @param {string}        s       the DNA sequence
 * @return {string[]}             all the repeated sub-sequences
 */
const findRepeatedDnaSequences = function(s) {
  const subs = new Set();
  const res = new Set();
  for (let i = 0; i <= s.length - LENGTH; i++) {
    const sub = s.substr(i, LENGTH);
    if (subs.has(sub) && !res.has(sub)) {
      res.add(sub);
    } else {
      subs.add(sub);
    }
  }
  return [...res];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0187 - Repeated DNA Sequences:');
  [
    'AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT',
    'AAAAAAAAAAA',
  ].forEach( v => {
    console.log(`  DNA="${v}"`);
    console.log(`  reps=[${findRepeatedDnaSequences(v).map(x=>`"${x}"`)}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
