/** NOT WORKING
 * https://leetcode.com/problems/3sum/
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  var ans = [];
  function twoSum(excludeIndex, target) {
    var res = [];
    var set = new Set([]);
    for (var i = 0; i < nums.length; i++) {
      if (i == excludeIndex) continue;

      var searchFor = target - nums[i];
      if (set.has(searchFor)) {
        res.push([searchFor, nums[i]]);
        break;
      } else {
        set.add(nums[i]);
      }
    }

    return res;
  }

  for (var i = 0; i < nums.length; i++) {
    var res = twoSum(i, 0 - nums[i]);
    if (res.length) {
      res.forEach((elem) => {
        var tmp = [nums[i], ...elem];
        tmp = tmp.sort();
        ans.push(tmp);
      });
    }
  }
  return Array.from(new Set(ans.map(JSON.stringify)), JSON.parse);
};
