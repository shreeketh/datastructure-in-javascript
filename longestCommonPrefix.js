// https://leetcode.com/problems/longest-common-prefix/
/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    var result = -1
    
    strs.forEach(str => {
        if(result == -1){
            result = str
        } else {
            var temp =""
            for(var x=0; x<result.length; x++){
                if(result[x]==str[x]){
                    temp+=result[x]
                } else {
                    break
                }
            }
            result = temp
        }
    })
    
    return result
};