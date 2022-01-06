/**
 * https://leetcode.com/problems/missing-ranges/
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function (nums, lower, upper) {
    var results = []

    var tempStart = lower
    var tempEnd = lower
    for (var x = lower; x <= upper; x++) {
        if (nums.includes(x)) {
            if (tempStart < tempEnd) {
                // If single number missing, don't push range, adding 2 because we have x++
                if ((tempEnd == tempStart + 2)) {
                    results.push(`${tempEnd}`)
                } else {
                    // push range
                    results.push(`${tempStart + 1}->${tempEnd}`)
                }
                tempStart = x
            } else {
                tempEnd = x
            }
        } else {
            tempEnd = x
        }
        // at the end
        if (x == upper && !nums.includes(x)) {
            results.push(`${tempStart + 1}->${tempEnd}`)
        }
    }

    return results
};