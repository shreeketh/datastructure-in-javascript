/**
 * @param {number[]} nums
 * @return {number[][]}
 * https://leetcode.com/problems/permutations/
 */
var permute = function (nums) {
    var result = new Set()

    function calculate(arr = [], res = []) {
        if (res.length == nums.length) {
            result.add(res)
            return
        }

        for (var x = 0; x < arr.length; x++) {
            // filter is little expensive try some other approach
            calculate(arr.filter((v, i) => (i != x)), [...res, arr[x]])
        }
    }

    calculate(nums, [])

    return [...result]
};


/**
 * Given a collection of numbers, nums, that might contain duplicates,
 * return all possible unique permutations in any order.
 * https://leetcode.com/problems/permutations-ii/
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    var result = new Set()
    var map = {}

    function calculate(arr = [], res = []) {
        if (res.length == nums.length) {
            if (!map[res.join(',')]) {
                result.add(res)
                map[res.join(',')] = true
            }
            return
        }

        for (var x = 0; x < arr.length; x++) {
            // filter is little expensive try some other approach
            calculate(arr.filter((v, i) => (i != x)), [...res, arr[x]])
        }
    }

    calculate(nums, [])

    return [...result]
};

