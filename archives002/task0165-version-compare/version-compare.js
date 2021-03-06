const SEPARATOR = '.';


/**
 * @param {string}      version1    the 1st version number as string
 * @param {string}      version2    the 2nd version number as string
 * @return {number}                 comparison results: 1, 0, or -1
 */
const compareVersion = function(version1, version2) {
  const vs1 = version1.split(SEPARATOR);
  const vs2 = version2.split(SEPARATOR);
  while (vs1.length > 0 || vs2.length > 0) {
    const v1 = vs1.length > 0 ? parseInt(vs1.shift()) : 0;
    const v2 = vs2.length > 0 ? parseInt(vs2.shift()) : 0;
    if (v1 === v2) {
      continue ;
    }
    return v1 > v2 ? 1 : -1;
  }
  return 0;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0165 - Compare Version Numbers:');
  [
    ['0.1', '1.1'],
    ['1.0.1', '1'],
    ['7.5.2.4', '7.5.3'],
    ['1.01', '1.001'],
    ['1.0', '1.0.0'],
  ].forEach( vs => {
    console.log(`  re=${compareVersion(vs[0], vs[1])}, v1="${vs[0]}", v2="${vs[1]}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
