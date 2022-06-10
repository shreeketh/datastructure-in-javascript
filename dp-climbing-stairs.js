/**
 * https://leetcode.com/problems/climbing-stairs/
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    // keep 0, to match index with step
    var dp = [0, 1, 2]

    if (n <= 2) {
        return dp[n]
    }

    for (var step = 3; step <= n; step++) {
        dp[step] = dp[step - 1] + dp[step - 2]
    }

    return dp[n]
};

// Sudarshan's suggestion
/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    var first = 1
    var second = 2
    
    if(n <= 2){
        return n
    }
    
    for(var step=3; step<=n; step++){
        var temp = first + second
        
        first = second
        second= temp
    }
    
    return second
};


