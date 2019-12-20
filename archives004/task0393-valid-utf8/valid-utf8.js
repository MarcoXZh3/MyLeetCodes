/**
 * intuitive
 * @param {number[]}    data      the byte array data
 * @return {boolean}              whether valid UTF8 or not
 */
const validUtf8_0 = function(data) {
  for (let i = 0; i < data.length; i++) {
    let byte = data[i];
    let len = 0;
    if (byte < 0b10000000) {
      continue ;
    } else if (byte < 0b11100000) {
      len = 1;
    } else if (byte < 0b11110000) {
      len = 2;
    } else if (byte < 0b11111000) {
      len = 3;
    } else {
      return false;
    }
    i += len;
    if (i > data.length - 1) {
      return false;
    }
    while (len > 0) {
      if (data[i - len + 1] >= 0b10000000 && data[i - len + 1] < 0b11000000) {
        len --;
      } else {
        return false;
      }
    }
  }
  return true;
};


/**
 * intuitive 2
 * @param {number[]}    data      the byte array data
 * @return {boolean}              whether valid UTF8 or not
 */
const validUtf8_1 = function(data) {
  let cnt = 0;
  for (let byte of data) {
    if (cnt === 0) {
      if ((byte >> 5) === 0b110) {
        cnt = 1;
      } else if ((byte >> 4) == 0b1110) {
        cnt = 2;
      } else if ((byte >> 3) == 0b11110) {
        cnt = 3;
      } else if ((byte >> 7)) {
        return false;
      }
    } else {
      if ((byte >> 6) != 0b10) {
        return false;
      }
      cnt --;
    }
  }
  return cnt === 0;
};


/**
 * bit manipulation
 * @param {number[]}    data      the byte array data
 * @return {boolean}              whether valid UTF8 or not
 */
const validUtf8 = function(data) {
  let cnt = 0;
  const mask1 = 1 << 7;
  const mask2 = 1 << 6;
  for(let i = 0; i < data.length; i++) {
    if (cnt === 0) {
      let mask = 1 << 7;
      while ((mask & data[i]) !== 0) {
        cnt ++;
        mask >>= 1;
      }
      if (cnt === 0) {
        continue;
      }
      if (cnt > 4 || cnt === 1) {
        return false;
      }
    } else if ((data[i] & mask1) === 0 || (mask2 & data[i]) !== 0) {
      return false;
    }
    cnt --;
  }
  return cnt === 0;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0393 - UTF-8 Validation:');
  [
    [197, 130, 1],
    [235, 140, 4],
    [237],
  ].forEach( vs => {
    const str = vs.map(n => {
      let s = n.toString(2);
      while (s.length < 8) {
        s = '0' + s;
      }
      return s.substr(s.length - 8);
    }).join(' ');
    console.log(`  ${str}`);
    console.log(`  utf8=${validUtf8(vs)}, bytes=${JSON.stringify(vs)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
