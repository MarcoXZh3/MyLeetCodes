/**
 * depth first search
 * @param {string}      s   the string of digits
 * @return {string[]}       all possible IP addresses from the string
 */
const restoreIpAddresses0 = function(s) {
  /**
   * 
   * @param {string[]}  res   results of all valid IP addresses
   * @param {string[]}  cur   fields of the current result of IP
   * @param {string}    s     remaining string to extract more fields
   */
  const dfs = (res, cur, s) => {
    // stop if no more fields for current result or no more string left
    if (cur.length === 4 || s.length === 0) {
      // specially, if both conditions are satisfied, a valid IP is found
      if (cur.length === 4 && s.length === 0) {
        res.push(cur.join('.'));
      }
      return ;
    }
    // try to extract this many of digits as the next field
    for (let i = 1; i <= 3; i++) {
      // no enough chars available - stop
      if (s.length < i) {
        break ;
      }
      // check if the digits is a valid IP field or not
      let sub = s.substring(0, i);
      // an IP field doesn't have leading zeroes unless it is 0
      if (i > 1 && sub.startsWith(0)) {
        return ;
      }
      let v = parseInt(sub, 10);
      // if valid, then save it, dig deeper and revert it
      if (v >= 0 && v <= 255) {
        cur.push(sub);
        dfs(res, cur, s.substring(i));
        cur.pop();
      }
    }
  };

  // depth first search the entire string
  const res = [];
  dfs(res, [], s);
  return res;
};


/**
 * try all possible ways of splitting the string into 4 parts
 * @param {string}      s   the string of digits
 * @return {string[]}       all possible IP addresses from the string
 */
const restoreIpAddresses = function(s) {
  const res = [];
  const length = s.length;
  for (let i = 1; i <= 3 && i <= length - 3; i++) {
    for (let j = 1; j <= 3 && j <= length - 2; j++) {
      for (let k = 1; k <= 3 && k <= length - 1; k++) {
        const v1 = parseInt(s.substr(0, i), 10);
        const v2 = parseInt(s.substr(i, j), 10);
        const v3 = parseInt(s.substr(i + j, k), 10);
        const v4 = parseInt(s.substr(i + j + k), 10);
        const re = `${v1}.${v2}.${v3}.${v4}`;
        // all fields valid and contain no leading zero unless 0 itself
        if (v1 <= 255 && v2 <= 255 && v3 <= 255 && v4 <= 255 &&
            re.length === s.length + 3) {
          res.push(re);
        }
      }
    }
  }
  return res;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0093 - Restore IP Addresses:');
  [
    '25525511135',
    '0000',
    '010010',
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
