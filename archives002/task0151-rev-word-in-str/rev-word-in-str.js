/**
 * Java/C/C++ style solution
 * @param {string}    s   the entire string
 * @return {string}       the reversed string
 */
const reverseWords0 = function(s) {
  const reverse = (arr, i, j) => {
    while (i < j) {
      const tmp = arr[i];
      arr[i ++] = arr[j];
      arr[j --] = tmp;
    }
  };

  // make the string as char array (Java/C/C++ style)
  const arr = s.split('');
  // step 1: reverse the entire string
  reverse(arr, 0, arr.length - 1);
  // step 2: reverse back each word
  let i = 0;
  let j = 0;
  while (i < arr.length) {
    while (i < j || i < arr.length && arr[i] === ' ') {
      i ++;
    }
    while (j < i || j < arr.length && arr[j] !== ' ') {
      j ++;
    }
    reverse(arr, i, j - 1);
  }
  // step 3: clean the extra spaces
  i = 0;
  j = 0;
  while (j < arr.length) {
    while (j < arr.length && arr[j] === ' ') {
      j ++;
    }
    while (j < arr.length && arr[j] !== ' ') {
      arr[i ++] = arr[j ++];
    }
    while (j < arr.length && arr[j] === ' ') {
      j ++;
    }
    if (j < arr.length) {
      arr[i ++] = ' ';
    }
  }

  return arr.slice(0, i).join('');
};


/**
 * JavaScript style solution
 * @param {string}    s   the entire string
 * @return {string}       the reversed string
 */
const reverseWords = function(s) {
  return s.split(' ').filter( x=>x ).reverse().join(' ');
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0151 - Reverse Words in a String:');
  [
    'the sky is blue',
    '  hello world!  ',
    'a good   example',
  ].forEach( v => {
    console.log(`  str="${v}", rev="${reverseWords(v)}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
