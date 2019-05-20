/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
};


/**
 * @param {ListNode[]}  lists   the k lists
 * @return {ListNode}           the merged list
 */
const mergeKLists = function(lists) {

};


/**
 * create a list out of an array
 * @param {number[]}    vals      the number array
 * @returns {ListNode}            the head of the created list
 */
const create = function(vals) {
  if (!vals || vals.length === 0) {
    return null;
  }
  const head = new ListNode(vals[0]);
  let cur = head;
  for (let i = 1; i < vals.length; i++) {
    cur = cur.next = new ListNode(vals[i]);
  }
  return head;
}


/**
 * print the list
 * @param {ListNode}    head      head of the singly-linked list
 * @returns {string}              string representation of the list
 */
const print = function(head) {
  const vals = [];
  while (head) {
    vals.push(head.val);
    head = head.next;
  }
  return vals.join('->');
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0023 - Merge k Sorted Lists:');
  [
    [ [1, 4, 5], [1, 3, 4], [2, 6] ],
  ].forEach( vs => {
    const lists = [];
    vs.forEach( (arr, i) => {
      lists.push(create(arr));
      console.log(`  list${i+1}=[ ${print(lists[i])} ]`);
    })
    console.log(`  merged=[ ${print(mergeKLists(lists))} ]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
