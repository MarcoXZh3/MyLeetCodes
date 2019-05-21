/**
 * Definition for singly-linked list
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}


/**
 * @param {ListNode}    head    head of the list
 * @return {ListNode}           head of the swapped list
 */
const swapPairs = function(head) {
  // not enough nodes
  if (!head) {
    return null;
  } else if (!head.next) {
    return head;
  }

  // more than two nodes
  const head1 = head.next;    // new head
  let prev = null;            // init 1: previous node
  let cur = head;             // init 2: current node
  while (cur && cur.next) {
    let next = cur.next;      // init 3 / forward 3: next node, next to current
    if (prev) {
      prev.next = next;       // swap 1: if available prev links to next
    }
    cur.next = next.next;     // swap 2: current links to next pair
    next.next = cur;          // swap 3: next points to current
    prev = cur;               // forward 1: prev becomes current
    cur = cur.next;           // forward 2: current moves next
  }
  return head1;
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
  console.log('Task 0025 - Swap Nodes in Pairs:');
  [
    [1, 2, 3, 4],
  ].forEach( vs => {
    const head = create(vs);
    console.log(`  old=[ ${print(head)} ]`);
    console.log(`  swapped=[ ${print(swapPairs(head))} ]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
