const path = require('path');
const { ListNode, array2list, printList } = require(path.resolve('_utils/list'));
const { PriorityQueue } = require(path.resolve('_utils/priority-queue'));


/**
 * recursion: merge 1 into (k-1), which was merged by 1 and (k-2), ...
 * @param {ListNode[]}  lists   the k lists
 * @return {ListNode}           the merged list
 */
const mergeKLists1 = function(lists) {
  // no more lists, return null
  if (lists.length === 0) {
    return null;
  }

  // merge list1 and merge result of the rest
  let l1 = lists.shift();
  let l2 = mergeKLists1(lists);
  const head = new ListNode(null);
  let cur = head;
  while (l1 || l2) {
    if (!l1) {
      cur.next = l2;
      break ;
    } else if (!l2) {
      cur.next = l1;
      break ;
    }
    if (l1.val < l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }
    cur = cur.next;
  }
  return head.next;
};


/**
 * iteration: retrieve 1 minimal head every time
 * @param {ListNode[]}  lists   the k lists
 * @return {ListNode}           the merged list
 */
const mergeKLists2 = function(lists) {
  let head = new ListNode(null);
  let cur = head;
  while (true) {
    // look for index of the minimal head from all lists
    let pos = -1;
    let i = 0;
    while (i < lists.length) {
      if (!lists[i]) {
        lists.splice(i, 1);
        continue ;
      }
      if (pos < 0 || lists[i].val < lists[pos].val) {
        pos = i;
      }
      i++;
    }
    if (pos < 0) {
      break;
    }

    // update the minimal head
    cur.next = lists[pos];
    cur = cur.next;
    lists[pos] = lists[pos].next;
    // this list may become empty -- remove it
  }
  return head.next;
};


/**
 * brutal force: collect values of all nodes, sort and create a new list
 * optimized by priority queue
 * @param {ListNode[]}  lists   the k lists
 * @return {ListNode}           the merged list
 */
const mergeKLists = function(lists) {
  const q = new PriorityQueue();
  // loop every list
  for (let head of lists) {
    while (head) {
      q.enqueue(head, head.val);
      head = head.next;
    }
  }
  // create new list backwards
  let tail = null;
  while (true) {
    const node = q.dequeue();
    if (node === null) {
      return tail;
    }
    node.next = tail;
    tail = node;
  }
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0023 - Merge k Sorted Lists:');
  [
    [ [1, 4, 5], [1, 3, 4], [2, 6] ],
    [ [] ],
    [ [-2, 1, 4, 5], [-2, 5, 6], [-2, 0] ],
  ].forEach( vs => {
    const lists = [];
    vs.forEach( (arr, i) => {
      lists.push(array2list(arr));
      console.log(`  list${i+1}=${printList(lists[i])}`);
    })
    console.log(`  merged=${printList(mergeKLists(lists))}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
