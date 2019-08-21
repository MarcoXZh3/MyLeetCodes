/**
 * @param {string}      s   the string of digits
 * @return {string[]}       all possible IP addresses from the string
 */
const restoreIpAddresses = function(s) {
  return [];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0093 - Restore IP Addresses:');
  [
    '25525511135',
  ].forEach( v => {
    console.log(`  str="${v}"`);
    const ips = restoreIpAddresses(v);
    for (let i = 0; i < ips.length; i++) {
      console.log(`  IP${i+1}="${ips[i]}"`);
    }
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
