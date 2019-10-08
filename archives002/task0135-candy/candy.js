const MIN_CANDY = 1;


/**
 * bi-directional comparison
 * @param {number[]}    ratings   ratings of each child
 * @return {number}               how many candies are required
 */
const candy0 = function(ratings) {
  const candies = [MIN_CANDY];
  for (let i = 1; i < ratings.length; i++) {
    candies.push(ratings[i] > ratings[i - 1] ? candies[i - 1] + 1 : MIN_CANDY);
  }
  let re = 0;
  for (let i = ratings.length - 1; i > 0; i--) {
    re += candies[i];
    if (ratings[i - 1] > ratings[i]) {
      candies[i - 1] = Math.max(candies[i] + 1, candies[i - 1]);
    }
  }
  return re + candies[0];
};


/**
 * one pass with count downs
 * @param {number[]}    ratings   ratings of each child
 * @return {number}               how many candies are required
 */
const candy = function(ratings) {
  let total = MIN_CANDY;
  let prev = MIN_CANDY;
  let countDown = 0;
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] >= ratings[i - 1]) {
      if (countDown) {
        // SUM(1, 2, ..., N) = N * (N + 1) / 2;
        total += countDown * (countDown + 1) / 2;
        if (countDown >= prev) {
          total += countDown - prev + 1;
        }
        countDown = 0;
        prev = MIN_CANDY;
      }
      prev = ratings[i] === ratings[i - 1] ? 1 : prev + 1;
      total += prev;
    } else {
      countDown ++;
    }
  }
  if (countDown) {
    total += countDown * (countDown + 1) / 2;
    if (countDown >= prev) {
      total += countDown - prev + 1;
    }
  }
  return total;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0135 - Candy:');
  [
    [1, 0, 2],
    [1, 2, 2],
    [1, 3, 2, 2, 1],
    [1, 3, 4, 5, 2],
  ].forEach( vs => {
    console.log(`  min=${candy(vs)}, ratings=[${vs.join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
