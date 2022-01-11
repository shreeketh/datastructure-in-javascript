/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {

    //Initialise the map
    var dpMap = {
        0: 0
    }

    //put all coins to dp map
    coins.forEach(x => dpMap[x] = 1)

    // Walk through all the amounts and update the dp map
    for (let amt = 1; amt <= amount; amt++) {
        if (dpMap[amt]) {
            continue
        } else {
            dpMap[amt] = calculateCoins(amt)
        }
    }

    // Function to calculate the minimum number of coins required for an amount
    function calculateCoins(amt) {
        var minCoins = Infinity
        for (let x = 1; x < amt; x++) {
            minCoins = Math.min(dpMap[x] + dpMap[amt - x], minCoins)
        }

        return minCoins
    }

    // If not possible, return -1
    if (Infinity == dpMap[amount]) {
        return -1
    }
    return dpMap[amount]

};