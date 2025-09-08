/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} prices
 * @return {number}
 */
var sellingWood = function(m, n, prices) {
  // Step 1: Create price map
  const priceMap = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  for (const [h, w, p] of prices) {
    priceMap[h][w] = Math.max(priceMap[h][w], p); 
  }

  // Step 2: Memoization table
  const memo = Array.from({ length: m + 1 }, () => Array(n + 1).fill(-1));

  function dp(h, w) {
    // Already computed
    if (memo[h][w] !== -1) return memo[h][w];

    // Start with direct sell price
    let best = priceMap[h][w];

    // Try horizontal cuts
    for (let i = 1; i < h; i++) {
      best = Math.max(best, dp(i, w) + dp(h - i, w));
    }

    // Try vertical cuts
    for (let j = 1; j < w; j++) {
      best = Math.max(best, dp(h, j) + dp(h, w - j));
    }

    return memo[h][w] = best;
  }

  return dp(m, n);
};
