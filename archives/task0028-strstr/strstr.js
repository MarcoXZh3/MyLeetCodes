/**
 * @param {string}    haystack      the string to find from
 * @param {string}    needle        the string to look at
 * @return {number}                 index of the target or -1 if not found
 */
const strStr = function(haystack, needle) {
  if (needle === '') {
    return 0;
  }

  let matches = 0;
  const length = needle.length;
  for (let i = 0; i <= haystack.length - length; i++) {
    // look for the first match
    if (haystack.charAt(i) !== needle.charAt(0)) {
      continue ;
    }
    matches ++;
    // look for all the next matches
    while (matches < length &&
           haystack.charAt(i + matches) === needle.charAt(matches)) {
      matches ++;
    }
    // if all matched, found and stop
    if (matches === length) {
      return i;
    }
    // partially match means not match at all
    matches = 0;
  }
  // all checked without any match
  return -1;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0028 - Implement strStr():');
  [
    ['hello', 'll'],
    ['aaaaa', 'bba'],
    ['a', 'a'],
  ].forEach( vs => {
    console.log(`  haystack="${vs[0]}", needle="${vs[1]}", index=${strStr(vs[0], vs[1])}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
