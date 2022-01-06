/**
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 * revisited
 */
 var twoSum = function(numbers, target) {
    let left = 0
    let right = numbers.length - 1
    let result = []
    
    while(left < right){
        // if duplicates are there, continue
        if(numbers[left] === numbers[left-1]){
            left++;
            continue;
        }
        const sum = numbers[left] + numbers[right]
        
        if(sum > target){
            right--
        } else if(sum < target){
            left++
        } else {
            result = [left+1, right+1]
            break
        }
    }
    
    return result
    
};