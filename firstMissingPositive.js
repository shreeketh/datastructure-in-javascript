/**
 * https://leetcode.com/problems/first-missing-positive/
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    var res = []
    var result = nums.length
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] >= 0) {
            res[nums[i]] = nums[i]
        }
    }

    if (!res.length) {
        result = 1
    }

    for (var j = 1; j <= res.length; j++) {
        if (res[j] == undefined) {
            result = j
            break
        }
    }

    return result
};