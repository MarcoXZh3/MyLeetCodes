/**
 * @param {number[][]}  points    coordinates of the points
 * @return {number}               max number of points in one line
 */
const maxPoints = function(points) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0149 - Max Points on a Line:');
  [
    [ [1, 1], [2, 2], [3, 3] ],
    [ [1, 1], [3, 2], [5, 3], [4, 1], [2, 3], [1, 4]],
  ].forEach( vs => {
    console.log(`  max=${maxPoints(vs)}, pts=[${vs.map( ps=>`[${ps.join(', ')}]`).join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
