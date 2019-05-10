/**
 * Singly-linked list
 * @param {integer}   val     val of the node in the list
 * @param {ListNode}  next    next node in the list
 */
function ListNode(val, next) {
  this.val = val;
  this.next = next;
};


/**
 * Print the singly-linked list
 * @param {ListNode}  head    first node of the list
 */
const printList = (head) => {
  let arr = [head.val];
  while (head.next) {
    head = head.next;
    arr.push(head.val);
  }
  return arr.join('->');
};


/**
 * Add two nums:
 * @param {ListNode}  l1      the first list
 * @param {ListNode}  l2      the second list
 * @return {ListNode}         the sum of the two lists
 */
const addTwoNumbers = (l1, l2) => {
  const re = new ListNode(0);
  let cur = re;
  while (l1 || l2) {
    let num1 = l1 ? l1.val : 0;
    let num2 = l2 ? l2.val : 0;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
    const sum = cur.val + num1 + num2;
    cur.val = sum % 10;
    if (l1 || l2 || sum > 9) {
      cur.next = new ListNode(sum > 9 ? 1 : 0);
      cur = cur.next;
    }
  }
  return re;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  const num1 = [2, 4, 3];
  const num2 = [5, 6, 8, 2];

  const l1 = new ListNode(num1[0]);
  let ln1 = l1;
  for (let i = 1; i < num1.length; i++) {
    ln1.next = new ListNode(num1[i]);
    ln1 = ln1.next;
  }
  const l2 = new ListNode(num2[0]);
  let ln2 = l2;
  for (let i = 1; i < num2.length; i++) {
    ln2.next = new ListNode(num2[i]);
    ln2 = ln2.next;
  }

  console.log(printList(l1));
  console.log(printList(l2));
  console.log(printList(addTwoNumbers(l1, l2)));
  if (callback) {
    callback();
  }
};


module.exports = main;
