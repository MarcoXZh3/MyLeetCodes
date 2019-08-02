/**
 * @param {string[]}      words       the word list
 * @param {number}        maxWidth    max length
 * @return {string[]}                 the justified sentence
 */
const fullJustify = function(words, maxWidth) {
  return [];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0068 - Text Justification:');
  [
    [['This', 'is', 'an', 'example', 'of', 'text', 'justification.'], 16],
    [['What','must','be','acknowledgment','shall','be'], 16],
  ].forEach( vs => {
    console.log(`  max=${vs[1]}`);
    for (let line of fullJustify(vs[0], vs[1])) {
      console.log(`  "${line}"`);
    }
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
