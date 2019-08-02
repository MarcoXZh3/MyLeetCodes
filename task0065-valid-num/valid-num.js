/**
 * extract and verify exponential, decimal and integer
 * @param {string}        s     the string for verification
 * @return {boolean}            true if is valid number; false if not
 */
const isNumber0 = function(s) {
  s = s.trim().toLowerCase();
  // ignore the optional sign
  if (s.startsWith('-') || s.startsWith('+')) {
    s = s.substring(1);
  }
  // extract the exponential part
  let part = '';
  let idx = s.indexOf('e');
  if (idx >= 0) {
    part = s.substring(idx + 1);
    // valid exponential must be non-empty and digits only with an optional sign
    if (!/^(\-|\+)*\d+$/.test(part)) {
      return false;
    }
    s = s.substring(0, idx);
  }
  // extract the decimal part
  part = '';
  idx = s.indexOf('.');
  if (idx >= 0) {
    part = s.substring(idx + 1);
    // valid decimal part must digits only; could be empty
    if (!/^\d*$/.test(part)) {
      return false;
    }
    s = s.substring(0, idx);
    // invalid if both integer and decimal are empty
    if (part.length === 0 && s.length === 0) {
      return false;
    }
  }
  // integer must be digits only; could be empty if decimal available
  return idx >= 0 ? /^\d*$/.test(s) : /^\d+$/.test(s);
};


/**
 * O(n) solution
 * @param {string}        s     the string for verification
 * @return {boolean}            true if is valid number; false if not
 */
const isNumber = function(s) {
  const lengths = []; // lengths of integer, decimal and exponential
  let idx = 0;        // index of the above: 0-integer; 1-decimal; 2-exponential
  let length = 0;     // current length of the current part
  s = s.trim();
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(char)) {
      length ++;
    } else if (char === '.') {
      if (idx > 0) {    // invalid if "." ends decimal or exponential
        return false;
      }
      lengths.push(length);
      idx = 1;
      length = 0;
    } else if (char === 'e' || char === 'E') {
      if (i === 0 || i === s.length - 1) {  // "e" cannot be either 1st or last char
        return false;
      }
      if (idx === 0) {                      // if "e" ends integer, then no decimal
        lengths.splice(0, 0, length, 0);
      } else if (idx === 1) {               // if "e" ends decimal
        lengths.push(length);
      } else {                              // any other condition is invalid
        return false;
      }
      idx = 2;
      length = 0;
    } else if (char === '+' || char === '-') {
      if (i === 0) {                            // sign could be 1st char
      } else if (idx === 2 && length === 0) {   // sign could be 1st of exponential
        if (i === s.length - 1) {               //     but cannot be last char
          return false;
        }
      } else {                                  // any other sign is invalid
        return false;
      }
    } else {                      // any other chars is invalid
      return false;
    }
  }
  if (length > 0) {
    lengths.push(length);
  }
  if (lengths.length === 0) {     // invalid if no digits at all
    return false;
  }
  // valid if non-empty integer and decimal (if decimal available)
  return lengths[0] + (lengths[1] || 0) > 0;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0065 - Valid Number:');
  [
    '0',
    ' 0.1 ',
    'abc',
    '1 a',
    '2e10',
    ' -90e3   ',
    ' 1e',
    'e3',
    ' 6e-1',
    ' 99e2.5 ',
    '53.5e93',
    ' --6 ',
    '-+3',
    '95a54e53',
    '.1',
    '3.',
    '1 .',
    '4e+',
  ].forEach( v => {
    console.log(`  str="${v}", isNumber=${isNumber(v)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
