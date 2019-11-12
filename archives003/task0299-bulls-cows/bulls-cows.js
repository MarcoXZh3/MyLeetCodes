/**
 * basic concept with 2 loops
 * @param {string}  secret    the secret number
 * @param {string}  guess     the guessed number
 * @return {string}           the hint message
 */
const getHint0 = function(secret, guess) {
  secret = secret.split('');
  guess = guess.split('');
  let bulls = 0;
  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      secret.splice(i, 1);
      guess.splice(i, 1);
      i --;
      bulls ++;
    }
  }
  let cows = 0;
  for (let i = 0; i < guess.length; i++) {
    const j = secret.indexOf(guess[i]);
    if (j >= 0) {
      secret.splice(j, 1);
      guess.splice(i, 1);
      i --;
      cows ++;
    }
  }
  return `${bulls}A${cows}B`;
};


/**
 * 1 pass
 * @param {string}  secret    the secret number
 * @param {string}  guess     the guessed number
 * @return {string}           the hint message
 */
const getHint = function(secret, guess) {
  let bulls = 0;
  let cows = 0;
  const nums = Array(10).fill(0); 
  for (let i = 0; i < secret.length; i++) {
    const char1 = secret.charAt(i);
    const char2 = guess.charAt(i);
    if (char1 === char2) {
      bulls ++;
    } else {
      if (nums[parseInt(char1, 10)] ++ < 0) {
        cows ++;
      }
      if (nums[parseInt(char2, 10)] -- > 0) {
        cows ++;
      }
    }
  }
  return `${bulls}A${cows}B`;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0299 - Bulls and Cows:');
  [
    ['1807', '7810'],
    ['1123', '0111'],
    ['1122', '2211'],
  ].forEach( vs => {
    console.log(`  hint="${getHint(vs[0], vs[1])}", secret="${vs[0]}", guess="${vs[1]}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
