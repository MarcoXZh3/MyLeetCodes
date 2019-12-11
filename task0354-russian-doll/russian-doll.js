/**
 * @param {number[][]}    envelopes   the size list of the envelopes
 * @return {number}                   max number of envelopes in a stack
 */
const maxEnvelopes = function(envelopes) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0354 - Russian Doll Envelopes:');
  [
    [ [5, 4], [6, 4], [6, 7], [2, 3] ],
  ].forEach( vs => {
    console.log(`  max=${maxEnvelopes(vs)}, envelopes=${JSON.stringify(vs)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
