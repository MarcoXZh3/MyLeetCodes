/**
 * @param {string}      s       the string to search
 * @param {string[]}    words   the words for matching
 * @return {number[]}           the indexes of matched substring
 */
const findSubstring = function(s, words) {
  // don't search if no words available
  if (words.length === 0) {
    return [];
  }

  let res = [];
  const chunk = words[0].length;
  const words0 = words.slice();     // backup the words
  for (let i = 0; i <= s.length - chunk * words0.length; i++) {
    let matched = false;      // assume no matches every time
    let cnt = 0;              // how many words has matched
    while (true) {
      if (words.length === 0) {   // it's truely matched only if all matched
        words = words0.slice();   // restore the words
        matched = true;
        break ;
      }
      let idx = words.indexOf(s.substr(i + cnt * chunk, chunk));
      if (idx < 0) {              // any word not matching means no match
        matched = false;
        words = words0.slice();   // restore the words
        break;
      }
      cnt ++;                     // found 1 word matched
      words.splice(idx, 1);       // remove it from matching targets
    }
    if (matched) {                // true matches are saved
      res.push(i);
    }
  }
  return res;
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
    ['', [] ],
    ['barfoofoobarthefoobarman', ['bar', 'foo', 'the'] ],
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
