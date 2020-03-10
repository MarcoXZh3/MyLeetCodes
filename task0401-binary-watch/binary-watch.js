/**
 * list all possible permutations of LEDs by backtracking
 * @param {number}    num     number of LEDs
 * @return {string[]}         all possible times
 */
const readBinaryWatch0 = function(num) {
  const backtracking = (res, cur, n, start) => {
    if (n === 0) {
      res.push(cur.slice());
      return ;
    } else if (start >= cur.length) {
      return ;
    }
    for (let i = start; i < cur.length; i++) {
      cur[i] = 1;
      backtracking(res, cur, n - 1, i + 1);
      cur[i] = 0;
    }
  };

  // arrange the LEDs
  const res = [];
  backtracking(res, Array(10).fill(0), num, 0);
  return res.map( re => {
    const hour = parseInt(re.slice(0, 4).join(''), 2);
    const minute = parseInt(re.slice(4).join(''), 2);
    return hour < 12 && minute < 60 ?
           `${hour}:${minute < 10 ? '0' : ''}${minute}` : null;
  }).filter( x => x );
};


/**
 * filter all times that have exact number of LEDs
 * @param {number}    num     number of LEDs
 * @return {string[]}         all possible times
 */
const readBinaryWatch = function(num) {
  const res = [];
  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 60; j++) {
      const bins = (i.toString(2) + j.toString(2)).split('');
      if (bins.filter( x => x === '1' ).length === num) {
        res.push(`${i}:${j < 10 ? '0' : ''}${j}`);
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
  console.log('Task 0401 - Binary Watch:');
  [
    1,
    2,
  ].forEach( v => {
    console.log(`  n=${v}, times=${JSON.stringify(readBinaryWatch(v))}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
