/**
 * @param {string}    s1    the 1st string
 * @param {string}    s2    the 2nd string
 * @param {string}    s3    the 3rd string
 * @return {boolean}        whether s3 matches s1 interleaving s2
 */
const isInterleave = function(s1, s2, s3) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0097 - Interleaving String:');
  [
    ['aabcc', 'dbbca', 'aadbbcbcac'],
    ['aabcc', 'dbbca', 'aadbbbaccc'],
  ].forEach( vs => {
    console.log(`  interleaving=${isInterleave(vs[0], vs[1], vs[2])}; s1="${vs[0]}", s2="${vs[1]}", s3="${vs[2]}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
