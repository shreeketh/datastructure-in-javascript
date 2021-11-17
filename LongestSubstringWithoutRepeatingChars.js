/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(str) {
    if(str.length == 0){
       return 0
   }

   if(str.length == 1){
       return 1
   }
let max = 0

   for(let start = 0; start < str.length-1; start++){
       const dataMap = {}
       let count = 0
       for(let end=start; end<str.length; end++){
           if(dataMap[str[end]]){
               count = 0
               break
           }
           dataMap[str[end]]=1
           count++
           if(max < count) {
                   max = count;
           }
       }
   }

   return max
};
