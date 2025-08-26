/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
     let minPrice = Infinity;   // Start with a very high number
    let maxProfit = 0;

    for (let price of prices) {
        // Update the minimum price seen so far
        minPrice = Math.min(minPrice, price);

        // Calculate profit if sold today
        let profit = price - minPrice;

        // Update maximum profit
        maxProfit = Math.max(maxProfit, profit);
    }

    return maxProfit;
};