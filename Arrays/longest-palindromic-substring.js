/**
 * https://leetcode.com/problems/longest-palindromic-substring/
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    var res = '';
    
    for(var x=0; x<s.length; x++){
        checkPalindrom(x, x);
        checkPalindrom(x, x+1);
    
    }
    
    function checkPalindrom(startIndex, endIndex){
        while(startIndex >=0 && endIndex < s.length && s[startIndex] == s[endIndex]){
            if(res.length < (endIndex-startIndex)+1){
                res = s.substr(startIndex, (endIndex-startIndex)+1)
            }
            startIndex--;
            endIndex++
        }
    }
    
    return res;
};