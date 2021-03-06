/**
 * Singly-linked list
 * @param {object}    val     val of the node in the list
 * @param {ListNode}  next    next node in the list
 */
const ListNode = module.exports.ListNode = function(val, next) {
  /**
   * value of the node
   */
  this.val = val;

  /**
   * link to the next node
   */
  this.next = next || null;
};


/**
 * create a list out of an array
 * @param {object[]}    vals      the number array
 * @returns {ListNode}            the head of the created list
 */
module.exports.array2list = function(vals) {
  if (!vals || vals.length === 0) {
    return null;
  }
  const head = new ListNode(vals[0]);
  let cur = head;
  for (let i = 1; i < vals.length; i++) {
    cur = cur.next = new ListNode(vals[i]);
  }
  return head;
};


/**
 * Print the singly-linked list
 * @param {ListNode}  head      first node of the list
 * @param {function}  toString  the custom function to print each node
 * @returns {string}            the string representation of the list
 */
module.exports.printList = function(head, toString) {
  if (!head) {
    try {
      return toString(head);
    } catch (_) {
      return '{NULL}';
    }
  }

  let arr = [head];
  while (head.next) {
    head = head.next;
    arr.push(head);
  }
  return arr.map( n=>toString?toString(n):`${n.val}`).join('->');
};
