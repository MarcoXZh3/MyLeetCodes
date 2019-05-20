/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
};


/**
 * recursion
 * @param {ListNode}    l1    the first list
 * @param {ListNode}    l2    the second list
 * @return {ListNode}         the merged list
 */
const mergeTwoLists1 = function(l1, l2) {
  if (!l1) {
    return l2;
  } else if (!l2) {
    return l1;
  }

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists1(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists1(l1, l2.next);
    return l2;
  }
};


/**
 * iteration
 * @param {ListNode}    l1    the first list
 * @param {ListNode}    l2    the second list
 * @return {ListNode}         the merged list
 */
const mergeTwoLists = function(l1, l2) {
  if (!l1) {
    return l2;
  } else if (!l2) {
    return l1;
  }

  let head;
  if (l1.val < l2.val) {
    head = l1;
    l1 = l1.next;
  } else {
    head = l2;
    l2 = l2.next;
  }
  let cur = head;
  while (l1 || l2) {
    if (!l1) {
      cur.next = l2;
      break ;
    } else if (!l2) {
      cur.next = l1;
      break ;
    } else if (l1.val < l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }
    cur = cur.next;
  }
  return head;
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
  console.log('Task 0021 - Merge Two Sorted Lists:');
  [
    [ [1, 2, 4], [1, 3, 4] ],
  ].forEach( vs => {
    const l1 = create(vs[0]);
    const l2 = create(vs[1]);
    console.log(`  list1=[ ${print(l1)} ], list2=[ ${print(l2)} ]`);
    console.log(`  merged=[ ${print(mergeTwoLists(l1, l2))} ]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
