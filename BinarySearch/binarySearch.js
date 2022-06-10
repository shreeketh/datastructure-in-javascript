/**
 * https://leetcode.com/problems/binary-search/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (!nums.length) return -1;

  var start = 0;
  var end = nums.length - 1;
  while (start <= end) {
    var mid = start + Math.floor((end - start) / 2);

    if (target == nums[mid]) {
      return mid;
    } else if (target < nums[mid]) {
      end = mid - 1;
    } else if (target > nums[mid]) {
      start = mid + 1;
    }
  }
  return -1;
};
