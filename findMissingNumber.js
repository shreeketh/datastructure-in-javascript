/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    const sum = nums.reduce((x, res)=> res+x, 0)
    const len = nums.length
    const maxSum = (len * (len+1))/2
    
    const missingNumber = maxSum - sum
    return missingNumber
    
};

// copied
var missingNumber = function(nums) {
    // create variable to store maxSum of 0,n range
    let maxSum = nums.length * (nums.length + 1) / 2; // O(1) space
    // return maxSum - numsSum
    return maxSum - nums.reduce((a, b) => a + b); // O(n) time since we looped
      // we find numsSum by reducing / summing all els in nums
  };