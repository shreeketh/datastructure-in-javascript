/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function(nums) {
    var maxProd = nums[0]
   for(let i=0; i< nums.length; i++ ){
       let sum = nums[i]
       // maxProd = Math.max(sum, maxProd)
       for(j=i+1; j<=nums.length; j++){
           maxProd = Math.max(sum, maxProd)
           sum *=nums[j]
       }
   }
   return maxProd
};