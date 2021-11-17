/**
 * https://leetcode.com/problems/remove-element/
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    let lastPos = nums.length -1
    let start = 0
    
  
    while(start <= lastPos) {
        if(nums[lastPos] == val){
            nums[lastPos] = '-'
            lastPos --
        } else if(nums[start] == val){
            nums[start] = nums[lastPos]
            nums[lastPos] = '-'
            lastPos --
        } else {
            start++
        }
    }
    return lastPos+1
};