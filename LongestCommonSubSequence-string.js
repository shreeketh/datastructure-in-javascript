/**
 * https://leetcode.com/problems/longest-common-subsequence/
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
 var longestCommonSubsequence = function(text1, text2) {
    var indexMap = {}
    var res = 0
    var lsatIndex=0
  
    for(var ind=0; ind<text1.length; ind++){
        for(var ind1=lsatIndex; ind1<text2.length; ind1++){
            if(!indexMap[ind1] && text2[ind1] == text1[ind]){
                indexMap[ind1] = true
                lsatIndex=ind1+1
                res++
                break
            }
        }
    }
    
    return res
};

// TODO: SOLVE WITH DP