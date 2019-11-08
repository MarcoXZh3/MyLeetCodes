/**
 * Bubble Sort - O(n ^ 2) on time and O(1) on space
 * Move the minimum (maximum) to the first, and repeat this on the rest array
 * @param {array}     arr         list of elements to be added to the queue
 * @param {boolean}   ascending   whether ascending sort or descending sort
 * @param {function}  compare     custom function for element comparison
 *          @param {object}   a       the 1st element
 *          @param {object}   b       the 2nd element
 *          @returns {number}         1 if a > b; -1 if a < b; 0 if a === b
 */
const bubbleSort = module.exports.bubbleSort = function (
  arr,
  ascending = true,
  compare = (a, b) => a === b ? 0 : (a > b ? 1 : -1),
) {
  const sign = ascending ? 1 : -1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j ++) {
      if (compare(arr[i], arr[j]) * sign > 0) {
        const tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
    }
  }
};


/**
 * Insertion Sort - O(n ^ 2) on time and O(1) on space
 * Grab an element, considering the sub array before it is sorted, move it to
 * the right position of the sorted sub array
 * @param {array}     arr         list of elements to be added to the queue
 * @param {boolean}   ascending   whether ascending sort or descending sort
 * @param {function}  compare     custom function for element comparison
 *          @param {object}   a       the 1st element
 *          @param {object}   b       the 2nd element
 *          @returns {number}         1 if a > b; -1 if a < b; 0 if a === b
 */
const insertSort = module.exports.insertSort = function (
  arr,
  ascending = true,
  compare = (a, b) => a === b ? 0 : (a > b ? 1 : -1),
) {
  const sign = ascending ? 1 : -1;
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j > 0 && compare(arr[j - 1], arr[j]) * sign > 0) {
      const tmp = arr[j - 1];
      arr[j - 1] = arr[j];
      arr[j --] = tmp;
    }
  }
};


/**
 * Heap Sort - O(n log n) on time and O(1) on space
 * Build a heap to grab the root, use its tail as new the root then heapify
 * @param {array}     arr         list of elements to be added to the queue
 * @param {boolean}   ascending   whether ascending sort or descending sort
 * @param {function}  compare     custom function for element comparison
 *          @param {object}   a       the 1st element
 *          @param {object}   b       the 2nd element
 *          @returns {number}         1 if a > b; -1 if a < b; 0 if a === b
 */
const heapSort = module.exports.heapSort = function (
  arr,
  ascending = true,
  compare = (a, b) => a === b ? 0 : (a > b ? 1 : -1),
) {
  const sign = ascending ? 1 : -1;

  const heapify = (p, boundary) => {
    let target = p;
    let idx = 2 * p + 1;
    if (idx < boundary && compare(arr[target], arr[idx]) * sign < 0) {
      target = idx;
    }
    idx ++;
    if (idx < boundary && compare(arr[target], arr[idx]) * sign < 0) {
      target = idx;
    }
    if (target !== p) {
      const tmp = arr[target];
      arr[target] = arr[p];
      arr[p] = tmp;
      heapify(target, boundary);
    }
  };

  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    heapify(i, arr.length);
  }
  for (let i = arr.length - 1; i > 0; i--) {
    const tmp = arr[0];
    arr[0] = arr[i];
    arr[i] = tmp;
    heapify(0, i);
  }
};


/**
 * Merge Sort (recursion) - O(n log n) on time and O(n) on space
 * split the array in the middle, merge-sort each, and then merge the them
 * element by element
 * @param {array}     arr         list of elements to be added to the queue
 * @param {boolean}   ascending   whether ascending sort or descending sort
 * @param {function}  compare     custom function for element comparison
 *          @param {object}   a       the 1st element
 *          @param {object}   b       the 2nd element
 *          @returns {number}         1 if a > b; -1 if a < b; 0 if a === b
 */
const mergeSort1 = module.exports.mergeSort1 = function (
  arr,
  ascending = true,
  compare = (a, b) => a === b ? 0 : (a > b ? 1 : -1),
) {
  const sign = ascending ? 1 : -1;

  const sort = (arr) => {
    if (arr.length < 2) {
      return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const arr1 = sort(arr.slice(0, mid));
    const arr2 = sort(arr.slice(mid));
    return merge(arr1, arr2);
  };

  const merge = (arr1, arr2) => {
    const re = [];
    while (arr1.length > 0 && arr2.length > 0) {
      if (compare(arr1[0], arr2[0]) * sign < 0) {
        re.push(arr1.shift());
      } else {
        re.push(arr2.shift());
      }
    }
    return re.concat(arr1, arr2);
  };

  return sort(arr);
};


/**
 * Merge Sort (iteration) - O(n log n) on time and O(n) on space
 * split the array in the middle, merge-sort each, and then merge the them
 * element by element
 * @param {array}     arr         list of elements to be added to the queue
 * @param {boolean}   ascending   whether ascending sort or descending sort
 * @param {function}  compare     custom function for element comparison
 *          @param {object}   a       the 1st element
 *          @param {object}   b       the 2nd element
 *          @returns {number}         1 if a > b; -1 if a < b; 0 if a === b
 */
const mergeSort2 = module.exports.mergeSort2 = function (
  arr,
  ascending = true,
  compare = (a, b) => a === b ? 0 : (a > b ? 1 : -1),
) {
  const sign = ascending ? 1 : -1;

  for (let i = 1; i <= arr.length - 1; i *= 2) {
    for (let j = 0; j < arr.length - 1; j += 2 * i) {
      const from = j;
      const mid = j + i - 1;
      const to = Math.min(arr.length - 1, j + 2 * i - 1);

      // merge the sub array
      const tmp = [];
      let l = from;
      let r = mid + 1;
      while (l <= mid && r <= to) {
        if (compare(arr[l], arr[r]) * sign < 0) {
          tmp.push(arr[l ++]);
        } else {
          tmp.push(arr[r ++]);
        }
      }
      while (l <= mid) {
        tmp.push(arr[l ++]);
      }
      while (r <= to) {
        tmp.push(arr[r ++]);
      }
      for (let i = from; i <= to; i++) {
        arr[i] = tmp[i - from];
      }
    }
  }
};


/**
 * Bucket Sort - O(n + k) on time and O(n) on space
 * split values to buckets, sort within buckets, and then collect buckets
 * @param {array}     arr         list of elements to be added to the queue
 * @param {boolean}   ascending   whether ascending sort or descending sort
 * @param {function}  compare     custom function for element comparison
 *          @param {object}   a       the 1st element
 *          @param {object}   b       the 2nd element
 *          @returns {number}         1 if a > b; -1 if a < b; 0 if a === b
 */
const bucketSort = module.exports.bucketSort = function (
  arr,
  ascending = true,
  compare = (a, b) => a === b ? 0 : (a > b ? 1 : -1),
) {
  const sign = ascending ? 1 : -1;
  const MIN = Math.min(...arr);
  const bucks = Math.floor((Math.max(...arr) - MIN) / arr.length) + 1;
  const buckets = [];
  for (let val of arr) {
    const remainder = ~~ ((val - MIN) / bucks);   // round towards 0
    const bucket = buckets[remainder] = buckets[remainder] || [];
    bucket.push(val);
    let i = bucket.length - 1;            // sort the bucket after value added
    while (i > 0) {
      if (compare(bucket[i], bucket[i - 1]) * sign < 0) {
        const tmp = bucket[i];
        bucket[i] = bucket[i - 1];
        bucket[i - 1] = tmp;
      }
      i --;
    }
  }
  arr = [];
  for (let i = 0; i < buckets.length; i++) {  // concat buckets with order
    arr = arr.concat(buckets[ascending ? i : buckets.length - 1 - i] || []);
  }
  return arr;
};


/**
 * Radix Sort - O(n k) on time and O(n + k) on space
 * sort by digits (as buckets), lowest to highest
 * @param {array<integer>}  arr       list of integers to be added to the queue
 * @param {boolean}         ascending whether ascending sort or descending sort
 */
const radixSort = module.exports.radixSort = function (
  arr,
  ascending = true,
) {
  const MIN = Math.min(...arr);
  let max = `${Math.max(...arr) - MIN}`.length;
  let divisor = 1;
  let buckets = [...Array(10).keys()].map( _=>[] );
  buckets = [];
  while (max -- > 0) {
    divisor *= 10;            // digits low to high
    for (let val of arr) {    // put values to the corresponding bucket of digit
      const remainder = (val - MIN) % divisor;
      !buckets[remainder] && (buckets[remainder] = [])
      buckets[remainder].push(val);
    }
    arr = [];
    for (let i = 0; i < buckets.length; i++) {  // concat buckets with order
      arr = arr.concat(buckets[ascending ? i : buckets.length - 1 - i] || []);
    }
    buckets = [];
  }
  return arr;
};


/**
 * main entry
 * @see: https://www.bigocheatsheet.com/
 */
const main = module.exports.main = function() {
  const arr = [];
  while (arr.length < 10) {
    arr.push(Math.round(Math.random() * 100) - 50);
  }
  console.log(`arr0=[${arr.join(', ')}]`);

  // Bubble sort
  const arr01 = arr.slice();
  bubbleSort(arr01);
  console.log(`bubbleSort1=[${arr01.join(', ')}]`);
  const arr02 = arr.slice();
  bubbleSort(arr02, false);
  console.log(`bubbleSort2=[${arr02.join(', ')}]`);

  // Insertion sort
  const arr03 = arr.slice();
  insertSort(arr03);
  console.log(`insertSort1=[${arr03.join(', ')}]`);
  const arr04 = arr.slice();
  insertSort(arr04, false);
  console.log(`insertSort2=[${arr04.join(', ')}]`);

  // Heap sort
  const arr05 = arr.slice();
  heapSort(arr05);
  console.log(`heapSort1=[${arr05.join(', ')}]`);
  const arr06 = arr.slice();
  heapSort(arr06, false);
  console.log(`heapSort2=[${arr06.join(', ')}]`);

  // Merge sort - recursion
  const arr07 = mergeSort1(arr.slice());
  console.log(`mergeSort1=[${arr07.join(', ')}]`);
  const arr08 = mergeSort1(arr.slice(), false);
  console.log(`mergeSort2=[${arr08.join(', ')}]`);

  // Merge sort - iteration
  const arr09 = arr.slice();
  mergeSort2(arr09);
  console.log(`mergeSort3=[${arr09.join(', ')}]`);
  const arr10 = arr.slice();
  mergeSort2(arr10, false);
  console.log(`mergeSort4=[${arr10.join(', ')}]`);

  // Bucket sort
  const arr11 = bucketSort(arr.slice());
  console.log(`bucketSort1=[${arr11.join(', ')}]`);
  const arr12 = bucketSort(arr.slice(), false);
  console.log(`bucketSort2=[${arr12.join(', ')}]`);

  // Radix sort
  const arr13 = radixSort(arr.slice());
  console.log(`radixSort1=[${arr13.join(', ')}]`);
  const arr14 = radixSort(arr.slice(), false);
  console.log(`radixSort2=[${arr14.join(', ')}]`);

};


// run the sorting
main();
