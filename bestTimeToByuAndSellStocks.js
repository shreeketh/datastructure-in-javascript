/**
 * // getting timeout
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    var maxProfit = 0
    
    for(let i =0; i<prices.length; i++){
        for(let j=i; j< prices.length; j++){
            if(prices[j] > prices[i]){
                const profit = prices[j] - prices[i]
                maxProfit = Math.max(maxProfit, profit)
            }
        }
    }
    
    return maxProfit
};

// second approach
var maxProfit = function(prices) {
    var maxProfit = 0
    var left=0
    
    for(let i =0; i<prices.length; i++){
        if(prices[i] < prices[left]){
            left = i
        } else {
            const profit =  prices[i] - prices[left]
            maxProfit = Math.max(maxProfit, profit)
        }
    }
    
    return maxProfit
};