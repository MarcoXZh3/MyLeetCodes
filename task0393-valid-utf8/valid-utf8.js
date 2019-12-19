/**
 * @param {number[]}    data      the byte array data
 * @return {boolean}              whether valid UTF8 or not
 */
const validUtf8 = function(data) {

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
