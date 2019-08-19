const { ListNode, array2list, printList } = require('../_utils/list');


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
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0021 - Merge Two Sorted Lists:');
  [
    [ [1, 2, 4], [1, 3, 4] ],
  ].forEach( vs => {
    const l1 = array2list(vs[0]);
    const l2 = array2list(vs[1]);
    console.log(`  list1=${printList(l1)}, list2=${printList(l2)}`);
    console.log(`  merged=${printList(mergeTwoLists(l1, l2))}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
