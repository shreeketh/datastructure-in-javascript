/**
 * Not accepted
 * https://leetcode.com/problems/rotate-array/
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    let num = [...nums]
    for(let i=0; i< k; i++){
        const last = num.pop()
        num = [last, ...num]
    }
    
    return num
};

// Another easiest way

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    const lastIndex = nums.length-1
    for(let i=0; i< k; i++){
        nums.unshift(nums[lastIndex])
        nums.pop()
        
    }
    
};