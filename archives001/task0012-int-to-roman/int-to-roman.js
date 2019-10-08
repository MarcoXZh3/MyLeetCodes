/**
 * @param {number}    num     the interger
 * @return {string}           the roman number
 */
const intToRoman = function(num) {
  const chars = [
    ['I', 'V'],     // 1 and 5
    ['X', 'L'],     // 10 and 50
    ['C', 'D'],     // 100 and 500
    ['M'],          // 1000
  ];

  let roman = '';
  let cnt = 0;      // how many digits processed
  while (num > 0) {
    let roman1 = '';
    const d = num % 10;           // the digit
    const c = Math.floor(d / 5);  // carry by dividing 5
    let r = d % 5;                // remainder by dividing 5
    if (r === 4) {                                    // case 1: "4"
      roman1 = chars[cnt][0] + chars[cnt + c][1 - c]; // prepend "1" to next char
    } else {                                          // case 2: other numbers
      roman1 = c === 1 ? chars[cnt][c] : '';          // starts with current char
      while (r -- > 0) {
        roman1 += chars[cnt][0];                      // append extra "1"s
      }
    }
    // move to next digit
    roman = roman1 + roman;
    cnt ++;
    num = Math.floor(num / 10);
  }
  return roman;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0012 - Integer to Roman:');
  [
    3,
    4,
    9,
    58,
    1994,
  ].forEach( n => {
    console.log(`  n=${n}, roman=${intToRoman(n)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
