/**
 * https://leetcode.com/problems/kth-largest-element-in-an-array/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  var heap = ["dummy"];

  function insert(value) {
    heap.push(value);
    var index = heap.length - 1;

    while (index > 0) {
      var parent = Math.floor(index / 2);
      if (heap[index] > heap[parent]) {
        var temp = heap[index];
        heap[index] = heap[parent];
        heap[parent] = temp;

        index = parent;
      } else {
        break;
      }
    }
  }

  function getLarget() {
    var largest = heap[1];
    heap[1] = heap[heap.length - 1];
    heap.pop();

    var index = 1;

    while (index < heap.length) {
      if (heap[index] < heap[index * 2] || heap[index] < heap[index * 2 + 1]) {
        if (heap[index * 2] > heap[index * 2 + 1]) {
          var temp = heap[index * 2];
          heap[index * 2] = heap[index];
          heap[index] = temp;
          index = index * 2;
        } else if (heap[index * 2 + 1] > heap[index * 2]) {
          var temp = heap[index * 2 + 1];
          heap[index * 2 + 1] = heap[index];
          heap[index] = temp;
          index = index * 2 + 1;
        }
      } else {
        break;
      }
    }

    return largest;
  }

  nums.forEach((x) => {
    insert(x);
  });

  var res = "";
  for (var x = 0; x < k; x++) {
    res = getLarget();
  }

  return res;
};
