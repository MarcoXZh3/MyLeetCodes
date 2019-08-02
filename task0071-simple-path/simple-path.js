/**
 * @param {string}      path    the raw path
 * @return {string}             the simplified path
 */
const simplifyPath = function(path) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0071 - Simplify Path:');
  [
    '/home/',
    '/../',
    '/home//foo/',
    '/a/./b/../../c/',
    '/a/../../b/../c//.//',
    '/a//b////c/d//././/..',
  ].forEach( v => {
    console.log(`  path="${v}"; simple="${simplifyPath(v)}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
