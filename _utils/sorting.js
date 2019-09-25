/**
 * Bubble Sort - O(n ^ 2) on time and O(1) on space
 * Move the minimum (maximum) to the first, and repeat this on the rest array
 */
const bubbleSort = module.exports.bubbleSort = function(arr, ascending = true) {
  const factor = ascending ? 1 : -1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j ++) {
      if (arr[i] * factor > arr[j] * factor) {
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
 */
const insertSort = module.exports.insertSort = function(arr, ascending = true) {
  const factor = ascending ? 1 : -1;
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] * factor > arr[j] * factor) {
      const tmp = arr[j - 1];
      arr[j - 1] = arr[j];
      arr[j --] = tmp;
    }
  }
};


/**
 * Heap Sort - O(n log n) on time and O(1) on space
 * Build a heap to grab the root, use its tail as new the root then heapify
 */
const heapSort = module.exports.heapSort = function(arr, ascending = true) {
  const factor = ascending ? 1 : -1;

  // build heap: max heap for ascending while min heap for descending
  for (let i = 0; i < arr.length; i++) {
    let c = i;
    let p = Math.floor(c / 2);
    while (p >= 0 && arr[p] * factor < arr[c] * factor) {
      const tmp = arr[p];
      arr[p] = arr[c];
      arr[c] = tmp;
      c = p;
      p = Math.floor(c / 2);
    }
  }

  // every time: retrieve root, put tail as new root and heapify it
  for (let i = arr.length - 1; i > 0; i--) {
    // swap root and tail
    const tmp = arr[0];
    arr[0] = arr[i];
    arr[i] = tmp;

    // heapify the rest
    let p = 0;
    while (true) {
      let target = p;
      let idx = 2 * p + 1;
      if (idx < i && arr[target] * factor < arr[idx] * factor) {
        target = idx;
      }
      idx ++;
      if (idx < i && arr[target] * factor < arr[idx] * factor) {
        target = idx;
      }
      if (target === p) {
        break ;
      }
      const tmp = arr[target];
      arr[target] = arr[p];
      arr[p] = tmp;
      p = target;
    }
  }
};


/**
 * Merge Sort (recursion) - O(n log n) on time and O(n) on space
 * split the array in the middle, merge-sort each, and then merge the them
 * element by element
 */
const mergeSort1 = module.exports.mergeSort1 = function(arr, ascending = true) {
  const factor = ascending ? 1 : -1;

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
      if (arr1[0] * factor < arr2[0] * factor) {
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
 */
const mergeSort2 = module.exports.mergeSort2 = function(arr, ascending = true) {
  const factor = ascending ? 1 : -1;

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
        if (arr[l] * factor < arr[r] * factor) {
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
 * main entry
 * @see: https://www.bigocheatsheet.com/
 */
module.exports = function() {
  const arr = [];
  while (arr.length < 10) {
    arr.push(Math.round(Math.random() * 90) + 10);
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

};
