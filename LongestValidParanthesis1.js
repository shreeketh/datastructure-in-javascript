// https://leetcode.com/problems/longest-valid-parentheses/submissions/
/**
 * @param {string} s
 * @return {number}
 */
 var longestValidParentheses = function(s) {
    // initialise 0
    var dp = new Array(s.length).fill(0)
    var max = 0
    
    s.split('').forEach((val, index) => {
        if(index==0 && val==')'){
            // don't do anything
        } else if(val==')'){
            if(s[index-dp[index-1]-1] == '('){
                if(index > 2){
                    dp[index] = dp[index-dp[index-1]]+2+dp[index-1]
                    // Merge last valid paranthesis set with latest one,
                    // also handle if index goes negative
                    dp[index] = dp[index]+ (dp[index-dp[index]] || 0)
                } else {
                    dp[index] = 2
                }
                
                max = Math.max(max, dp[index])
            }
        }
    })
    
    return max
};
