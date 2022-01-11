/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
// Have solved with siple approach, don't go for tabular.
var longestCommonSubsequence = function (text1, text2) {
    // initialise 2d array and fill with 0
    // rows: text1
    // colums: tex2
    var dp = new Array(text1.length + 1).fill().map(x => (new Array(text2.length + 1).fill(0)))

    for (var row = text1.length - 1; row >= 0; row--) {
        for (var col = text2.length - 1; col >= 0; col--) {
            if (text1.length == row || text2.length == col) {
                dp[row][col] = 0
            } else if (text1[row] == text2[col]) {
                dp[row][col] = 1 + dp[row + 1][col + 1]
            } else {
                dp[row][col] = Math.max(dp[row + 1][col], dp[row][col + 1])
            }

            // Fuckin top-down, it will not work.. don't ever try 😡🤬
            //            if(text1[row] == text2[col]){
            //                if(row == 0 || col == 0){
            //                    dp[row][col] =1 
            //                } else {
            //                dp[row][col] = 1 + (dp[row-1][col-1] || 0)
            //                }
            //            } else {
            //                if(row == 0 || col == 0){
            //                    dp[row][col] = 0
            //                } else {

            //                dp[row][col] = Math.max(dp[row-1][col], dp[row][col-1])
            //                dp[row][col] = dp[row-1][col-1] + dp[row][col]
            //                }
            //            }
        }
    }

    return dp[0][0]
};

// liniar probing
// seperate chaining