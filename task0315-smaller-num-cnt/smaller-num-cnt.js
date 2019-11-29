/**
 * @param {number[]}    nums    the integer array
 * @return {number[]}           the count array
 */
const countSmaller = function(nums) {
  const Node = function(val, sum) {
    this.val = val;
    this.sum = sum;
    this.dup = 1;
    this.left = null;
    this.right = null;
  };

  const insert = (num, node, i, pre) => {
    if (!node) {
      node = new Node(num, 0);
      res[i] = pre;
    } else if (node.val === num) {
      node.dup ++;
      res[i] = pre + node.sum;
    } else if (node.val > num) {
      node.sum ++;
      node.left = insert(num, node.left, i, pre);
    } else {
      node.right = insert(num, node.right, i, pre + node.dup + node.sum);
    }
    return node;
  };

  const res = Array(nums.length).fill(0);
  let root = null;
  for (let i = nums.length - 1; i >= 0; i--) {
    root = insert(nums[i], root, i, 0);
  }
  return res;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0315 - Count of Smaller Numbers After Self:');
  [
    [5, 2, 6, 1],
  ].forEach( vs => {
    console.log(`  nums=${JSON.stringify(vs)}; cnt=${JSON.stringify(countSmaller(vs))}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
