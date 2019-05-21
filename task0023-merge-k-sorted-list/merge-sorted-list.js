/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
};


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
 * Priority Queue: implemented by max binary heap
 * @param {object[]}    vals    list of value-priority pair
 */
const PriorityQueue = function(vals) {
  /**
   * the values: each contains the value and pritority
   * format: { v:object, p:comparable }[]
   */
  this.vals = [];
  /**
   * insert a value with pritority: building the heap
   * @param {object}      v   the value
   * @param {comparable}  p   the priority
   */
  this.enqueue = (v, p) => {
    // append to end
    this.vals.push({ v:v, p:p });
    // and then heapify
    let cur = this.vals.length - 1;         // index of the current value
    let parent = Math.floor((cur - 1) / 2); // index of the parent value
    while (parent >= 0 && this.vals[cur].p > this.vals[parent].p) {
      let tmp = this.vals[cur];
      this.vals[cur] = this.vals[parent];
      this.vals[parent] = tmp;
      cur = parent;
      parent = Math.floor((cur - 1) / 2);
    }
  };
  /**
   * remove a value with the highest priority
   * @returns {object}      the value with the highest pritority
   */
  this.dequeue = () => {
    if (this.vals.length === 0) {
      return null;
    } else if (this.vals.length === 1) {
      return this.vals.pop().v;
    }
    const v = this.vals[0].v;
    // ovewrite first by last
    this.vals[0] = this.vals.pop();
    // and then heapify
    let cur = 0;                    // index of the current node
    while (true) {
      let child = 2 * cur + 1;      // index of the left child
      let max = cur;
      // compare current with left child
      if (child < this.vals.length && this.vals[max].p < this.vals[child].p) {
        max = child;
      }
      // compare current with right child
      child ++;
      if (child < this.vals.length && this.vals[max].p < this.vals[child].p) {
        max = child;
      }
      if (max === cur) {
        break ;
      }
      let tmp = this.vals[cur];
      this.vals[cur] = this.vals[max];
      this.vals[max] = tmp;
      cur = max;
    }
    return v;
  };
  /**
   * get the value with the highest pritority, without removing it
   * @returns {object}      the value with the highest pritority
   */
  this.peek = () => {
    return this.vals.length > 0 ? this.vals[0].v : null;
  }
  // initial the queue if needed
  if (vals) {
    for (let v of vals) {
      this.enqueue(v.v, v.p);
    }
  }
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
    [ [] ],
    [ [-2, 1, 4, 5], [-2, 5, 6], [-2, 0] ],
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
