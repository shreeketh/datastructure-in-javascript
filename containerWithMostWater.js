/**
 * https://leetcode.com/problems/container-with-most-water/
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    let max = 0
    let left =0 
    let right = height.length -1
    
    while(left<right){
        const water = Math.min(height[right], height[left]) * (right - left)
        max = Math.max(water, max)
        
        if(height[left] < height[right]){
            left++
        }
        
        else if (height[right] < height[left]){
            right--
        }
        
        else {
            left++
        }
    }
    
    return max
   
};