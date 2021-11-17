/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    var maxSum = nums[0]
    for(let i=0; i< nums.length; i++ ){
        let sum = nums[i]
        // maxSum = Math.max(sum, maxSum)
        for(j=i+1; j<=nums.length; j++){
            maxSum = Math.max(sum, maxSum)
            sum +=nums[j]
        }
    }
    return maxSum
};