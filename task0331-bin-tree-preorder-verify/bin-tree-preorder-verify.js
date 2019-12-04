/**
 * @param {string}      preorder    the serialization string
 * @return {boolean}                whether valid binary tree preorder or not
 */
const isValidSerialization = function(preorder) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0331 - Verify Preorder Serialization of a Binary Tree:');
  [
    '9,3,4,#,#,1,#,#,2,#,6,#,#',
    '1,#',
    '9,#,#,1',
  ].forEach( v => {
    console.log(`  valid=${isValidSerialization(v)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
