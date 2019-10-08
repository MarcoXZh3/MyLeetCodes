/**
 * print the zig-zag string from lines
 * @param {string[]}  lines     lines containing the zig-zag string
 */
const printZigZag = function(lines) {
  const rows = lines.length;
  if (rows === 1) {
    return console.log(lines[0].split('').join(' '));
  }

  lines.forEach( (line, lineIdx) => {
    const vs = line.split('');
    line = [];
    let idx = 0;
    while (vs.length > 0) {
      // full columns consist of letters from each line;
      // saw columns consist of 1 letter in a specific line and spaces in others
      const char = (idx % (rows - 1) === 0 ||                     // full columns
                    lineIdx + (idx % (rows - 1)) === rows - 1) ?  // saw columns
                   vs.shift() : ' ';
      line.splice(idx ++, 0, char);   // put the letter/space back to the line
    }
    console.log(line.join(' '));
  });
};


/**
 * @param {string}    s         string for conversion
 * @param {number}    numRows   number of rows
 * @return {string}             the zig-zag string
 */
const convert = function(s, numRows) {
  // the string won't change if 1 row needed
  if (numRows === 1) {
    printZigZag([s]);
    return s;
  }

  // create the rows
  const lines = [];
  while (lines.length < numRows) {
    lines.push('');
  }

  // create the zig-zag rows
  let lineIdx = 0;
  let sIdx = 0;
  let dir = 1;
  while (sIdx < s.length) {
    lines[lineIdx] += s.charAt(sIdx ++);
    if (lineIdx >= lines.length - 1) {
      dir = -1;
    } else if (lineIdx === 0) {
      dir = 1;
    }
    lineIdx += dir;
  }

  // concat the lines
  printZigZag(lines);
  return lines.join('');
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0006 - ZigZag Conversion:');
  [
    ['PAYPALISHIRING', 3],
    ['PAYPALISHIRING', 4],
    ['AB', 1],
  ].forEach( (vs) => {
    console.log(`  str="${vs[0]}", row=${vs[1]}; conv="${convert(vs[0], vs[1])}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
