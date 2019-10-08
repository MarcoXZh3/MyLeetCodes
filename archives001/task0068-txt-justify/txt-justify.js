/**
 * @param {string[]}      words       the word list
 * @param {number}        maxWidth    max length
 * @return {string[]}                 the justified sentence
 */
const fullJustify = function(words, maxWidth) {
  const res = [];
  while (words.length > 0) {
    // collect words for 1 line
    let i = 1;
    let length = words[0].length;
    while (i < words.length) {
      if (length + 1 + words[i].length > maxWidth) {
        break ;
      }
      length += 1 + words[i++].length;
    }
    const group = words.slice(0, i);
    words = words.slice(i);

    // justify the words
    let line = '';
    if (words.length === 0) {
      // final line: 1 space between and append rest to tail
      line = group.join(' ');
      while (line.length < maxWidth) {
        line += ' ';
      }
    } else {
      // other lines: repetitively append 1 space from 1nd until last 2nd
      length -= group.length - 1; // set length to word length without spaces
      i = 0;
      while (length < maxWidth) {
        group[i++] += ' ';
        length ++;
        if (i >= group.length - 1) {  // if reached the last 2nd word,
          i = 0;                      // the restart from the 1st
        }
      }
      line = group.join('');
    }
    res.push(line);
  }
  return res;
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
    [['Science','is','what','we','understand','well','enough','to','explain',
      'to','a','computer.','Art','is','everything','else','we','do'], 20],
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
