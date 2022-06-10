/**
 * https://leetcode.com/problems/remove-element/
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let lastPos = nums.length - 1;
  let start = 0;

  while (start <= lastPos) {
    if (nums[lastPos] == val) {
      nums.pop();
      lastPos--;
    } else if (nums[start] == val) {
      nums[start] = nums[lastPos];
      nums.pop();
      lastPos--;
    } else {
      start++;
    }
  }
  return lastPos + 1;
};
