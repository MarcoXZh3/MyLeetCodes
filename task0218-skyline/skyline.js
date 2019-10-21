/**
 * @param {number[][]}      buildings     the building coordinates
 * @return {number[][]}                   the skyline coordinates
 */
const getSkyline = function(buildings) {
  return [];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0218 - The Skyline Problem:');
  [
    [ [2, 9, 10], [3, 7, 15], [5, 12, 12], [15, 20, 10], [19, 24, 8] ],
  ].forEach( vs => {
    console.log(`  dots=[${vs.map( r=>`[${r.join(', ')}]`).join(', ')}]`);
    const skyline = getSkyline(vs);
    console.log(`  dots=[${skyline.map( r=>`[${r.join(', ')}]`).join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
