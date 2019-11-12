/**
 * @param {number}    num     the number to read
 * @return {string}           the reading of the number
 */
const numberToWords = function(num) {
  const ONES = [
    '', 'One', 'Two', 'Three', 'Four',
    'Five', 'Six', 'Seven', 'Eight', 'Nine',
    'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen',
    'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen',
  ];
  const TENS = [
    '', 'TEN', 'Twenty', 'Thirty', 'Forty',
    'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety',
  ];
  const THOUS = ['', 'Thousand', 'Million', 'Billion'];

  const read = (num) => {
    if (num === 0) {
      return '';
    } else if (num < 20) {
      return `${ONES[num]} `;
    } else if (num < 100) {
      return `${TENS[Math.floor(num / 10)]} ${read(num % 10)}`;
    } else {
      return `${ONES[Math.floor(num / 100)]} Hundred ${read(num % 100)}`;
    }
  };

  if (num === 0) {
    return 'Zero';
  }
  let word = '';
  let i = 0;
  while (num > 0) {
    if (num % 1000) {
      word = `${read(num % 1000)}${THOUS[i]} ${word}`;
    }
    num = Math.floor(num / 1000);
    i ++;
  }
  return word.trim();
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0273 - Integer to English Words:');
  [
    123,
    12345,
    1234567,
    1234567891,
  ].forEach( v => {
    console.log(`  num=${v}, read="${numberToWords(v)}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
