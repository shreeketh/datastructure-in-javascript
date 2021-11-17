// My solution
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
    
    var productOfFullArray = 1
    var result = []
    var zeros = 0
    nums.forEach(num =>{
        if(num==0){
            zeros++
        } else {
            productOfFullArray *= num
            
        }
    })
    
    nums.forEach(num => {
        if(zeros === 0){
            result.push(productOfFullArray/num)
        } else if (zeros == 1){
            if(num === 0){
                result.push(productOfFullArray)
            } else {
                result.push(0)
            }
        } else {
            result.push(0)
        }
    })
    return result
};

// Another approach is using 2 for loops, get product of left and get product of right
