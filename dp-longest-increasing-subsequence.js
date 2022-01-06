/**
 * https://leetcode.com/problems/longest-increasing-subsequence/
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    if (nums.length == 1) {
        return 1
    }

    var res = [nums[0]]
    nums.forEach(x => {
        var lastNum = res[res.length - 1]

        if (x > lastNum) {
            res.push(x)
        } else {
            // TODO: use binary search as it is sorted
            var y = 0;

            while (y < res.length) {
                if (res[y] < x) {
                    y++
                } else {
                    break
                }
            }
            res[y] = x
        }
    })

    return res.length
};

