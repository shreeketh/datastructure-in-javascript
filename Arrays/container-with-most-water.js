/**
 * https://leetcode.com/problems/container-with-most-water/
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    var left = 0;
    var right = height.length-1;
    
    var res = 0;
    
    while(left < right){
        res = Math.max(res, Math.min(height[left], height[right])*(right - left));
        
        if(height[left] < height[right]){
            left++;
        } else {
            right--;
        }
    }
    
    return res;
};