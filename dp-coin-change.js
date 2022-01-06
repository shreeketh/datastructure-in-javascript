/**
 * https://leetcode.com/problems/coin-change/
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    var dp = { 0: 0 }

    for (var amt = 1; amt <= amount; amt++) {
        for (var coin = 0; coin < coins.length; coin++) {
            if (amt < coins[coin]) {
                continue;
            } else {
                if (dp[amt]) {
                    dp[amt] = Math.min(dp[amt - coins[coin]] + 1, dp[amt])
                } else {
                    dp[amt] = dp[amt - coins[coin]] + 1
                }
            }
        }
    }
    // js will consider 0 as falsy, this is just hack
    if (dp[amount] == 0) {
        return 0
    }

    return dp[amount] || -1

};