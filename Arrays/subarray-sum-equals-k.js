/**
 * https://leetcode.com/problems/subarray-sum-equals-k/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// Brute force solution
var subarraySum = function (nums, k) {
  var res = 0;
  for (var i = 0; i < nums.length; i++) {
    var tmpSum = nums[i];
    var secondIndex = i;
    while (secondIndex < nums.length) {
      if (tmpSum == k) {
        res++;
      }

      if (secondIndex < nums.length) {
        secondIndex++;
        tmpSum += nums[secondIndex];
      }
    }
  }
  return res;
};

/* input : [1,2,3,4,5]

      0 1 2 3  4 
      -----------
    0|1 3 6 10 15
    1|- 2 5 9  14
    2|- - 3 7  12
    3|- - - 4  9
    4|- - - -  5 */

/**
 * https://leetcode.com/problems/subarray-sum-equals-k/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  var res = 0;

  // initialize table
  var dp = new Array(5).fill(0).map(() => new Array(5).fill(0));

  for (var row = 0; row < nums.length; row++) {
    for (var col = row; col < nums.length; col++) {
      if (row == 0) {
        if (col == 0) {
          dp[row][col] = nums[0];
          continue;
        }
        dp[row][col] = dp[row][col - 1] + nums[col];

        if (dp[row][col] === k) {
          res++;
        }
      } else {
        dp[row][col] = dp[row - 1][col] - dp[col - 1][col - 1];
        if (dp[row][col] === k) {
          res++;
        }
      }
    }
  }

  return res;
};
