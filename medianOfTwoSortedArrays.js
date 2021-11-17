/**
 * https://leetcode.com/problems/median-of-two-sorted-arrays/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    const mergedArray = [...nums1, ...nums2]
    mergedArray.sort((a,b)=> a-b)
    
    
    if(!mergedArray.length) {
        return ([])
    }
    if(mergedArray.length % 2 === 0){
        const mid = mergedArray.length/2
        return ((mergedArray[mid-1] + mergedArray[mid])/2)
    } else {
        const mid = (mergedArray.length-1)/2
        return(mergedArray[mid])
    }
};