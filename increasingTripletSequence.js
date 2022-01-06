/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var increasingTriplet = function(nums) {
    var result = false
    if(nums.length < 3) {
        return false
    }
    for(let i=1; i<nums.length; i++){
        if(i<1 || i==nums.length-1){
            continue
        }
        if(nums[i-1] < nums[i] && nums[i] < nums[i+1]){
            result = true
            break
        }
    }
    
    return result
};