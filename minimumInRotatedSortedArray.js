// correct solution

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
    var start =0
    var end = nums.length -1
    var result = nums[0]

    while(start <= end){
        if(nums[start] < nums[end]){
            result = Math.min(nums[start], result)
            break
        }
        
        const mid =  Math.floor((start+end)/2)

        result = Math.min(nums[mid], result)

        if(nums[mid] >= nums[start]){
            start = mid+1
        } else {
            end = mid-1
        }
    }
    return result
}

/**
 * My solution
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
    var start = 0
    var end = nums.length-1
    var mid =Math.floor(end/2)
    let minVal
    
    if(nums.length ==2){
        return Math.min(nums[0], nums[1])
    } 
    
    if(nums.length == 1){
        return nums[0]
    }
    
    while(start < end){
        // if not rotated
        mid =start + Math.floor((end-start)/2)
        
        // if array is not rotated
        if(nums[start] < nums[end] ){
            mid =0
            break
        }

        if(nums[mid-1] > nums[mid] && nums[mid] < nums[mid+1]){
            break
        }
        
        if(nums[start] <= nums[mid]){
            start = mid 
            //opt right
        } else if(nums[mid] >= nums[end]){
            end = mid-1
            // opt left
        }
        
    }
    
    return nums[mid]
};

