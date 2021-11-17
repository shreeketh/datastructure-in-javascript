/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    // It works :p
    // const dedupedArr = new Set([...nums])
    // return(dedupedArr.size !== nums.length)
const map = {}
let hasDuplicate = false

for(let i=0; i<nums.length; i++){
    if(map[nums[i]]){
        hasDuplicate = true
        break
    } 
    map[nums[i]] = 1
}
return hasDuplicate
};

// Cyclic order