/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const nums = [...nums1]
      for(let x=0; x<nums.length; x++){
          if(x>0 && nums[x-1]!='_' && nums[x] == nums[x-1]){
              num[x]='_'
              continue;
          }
          let y = x
          while(y>0 && (nums[y-1]=='_')){
            y--
          if(y>0 && nums[y-1]!='_' && nums[y] == nums[y-1]){
              num[y]='_'
          }
          }
    return nums
      }
}