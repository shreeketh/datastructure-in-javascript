/**
 * https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size/
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * function ArrayReader() {
 *
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 * };
 */

/**
 * @param {ArrayReader} reader
 * @param {number} target
 * @return {number}
 */
var search = function (reader, target) {
  var firstIndex = 0;
  var secondIndex = 1;
  while (reader.get(secondIndex) < target) {
    firstIndex = secondIndex;
    secondIndex = secondIndex + firstIndex;
  }

  return binarySearch(firstIndex, secondIndex);

  function binarySearch(start, end) {
    var low = start;
    var high = end;

    while (low <= high) {
      var mid = low + Math.floor((high - low) / 2);
      if (reader.get(mid) === target) {
        return mid;
      } else if (target < reader.get(mid)) {
        high = mid - 1;
      } else if (target > reader.get(mid)) {
        low = mid + 1;
      }
    }

    return -1;
  }
};
