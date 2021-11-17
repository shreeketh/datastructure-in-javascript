function longestValidParanthesis(str){
    const strArr = str.split('') //not required
    const dp = []
    
    let max = 0
    
    if(strArr.length === 0){
        return 0
    }
    
    for(let i=0; i< strArr.length; i++){
        if(strArr[i] == '('){
            dp[i] = 0
        } else if(strArr[i] == ')'){
            // check if it is at 0
            if(i==0){
                dp[i] = 0
                continue;
            } else {
                if(strArr[i-1] == '('){
                    dp[i] = (dp[i-2]||0)+2
                } else if(strArr[i-1] == ')'){
                    if(strArr[i-1-dp[i-1]] == '('){
                        dp[i] = (dp[i-1]||0) + 2 + dp[i-2-dp[i-1]]
                    }
                }
            }
        }
        max = Math.max(max, dp[i])
    }
    
    return max
    }
    
    longestValidParanthesis('(((())')
    // valid anagram