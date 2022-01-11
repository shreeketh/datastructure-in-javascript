let solveKnapsack = function (profits, weights, capacity) {
    function recursiveFn(p, w, c, index) {
        if (index > p.length || c <= 0) return 0; // base case

        var profit1 = 0;
        var profit2 = 0

        if (w[index] <= c) {
            profit1 = p[index] + recursiveFn(p, w, c - w[index], index + 1)
        }
        profit2 = recursiveFn(p, w, c, index + 1)

        return Math.max(profit1, profit2)
    }

    var maxProfit = recursiveFn(profits, weights, capacity, 0)

    return maxProfit
};

var profits = [1, 6, 10, 16];
var weights = [1, 2, 3, 5];
// number Of Calls:36
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 7)}`);
// number Of Calls:32
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 6)}`);