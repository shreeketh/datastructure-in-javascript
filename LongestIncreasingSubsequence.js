// my solution, fails for some cases
// https://leetcode.com/problems/longest-increasing-subsequence/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function(nums) {
    var res =0
    for(var i=0; i<nums.length; i++){
        var temp =1
        var lastRes = nums[i]
        for(var j=i; j<nums.length; j++){
            if(nums[j] > lastRes){
                lastRes = nums[j] 
                temp++
            }
        }
        res = Math.max(temp, res)
    }
    
    return res
};


// correct solution
// use binary search in the second block to optimise
/**
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function(nums) {
     // keep an result array
    var res = []
    res.push(nums[0])
    for(var i=0; i<nums.length; i++){
        var temp =nums[i]
        var lastNum = res[res.length - 1]
        if(temp > lastNum){
            res.push(temp)
        } else {
            // replace latest value in the result array
            var x =0
            while(temp > res[x] && x < res.length){
                x++
            }
            res[x] = temp
        }
    }
    
    return res.length
};