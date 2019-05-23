/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
const findSubstring = function(s, words) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0030 - Substring with Concatenation of All Words:');
  [
    ['barfoothefoobarman', ['foo', 'bar'] ],
    ['wordgoodgoodgoodbestword', ['word', 'good', 'best', 'word'] ],
  ].forEach( vs => {
    const res = findSubstring(vs[0].slice(), vs[1].slice());
    console.log(`  res=[${res.join(', ')}], s="${vs[0]}"`);
    console.log(`  words=[${ vs[1].map( x=>`"${x}'`).join(', ') }]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
