/**
 * @param {number[]} stones
 * @return {number}
 */
function lastStoneWeightII(stones) {
    const totalSum = stones.reduce((a, b) => a + b, 0);
    const target = Math.floor(totalSum / 2);
    const n = stones.length;

    // memo[i][j] means: can we reach sum j with first i stones?
    const memo = new Array(n + 1).fill().map(() => new Array(target + 1).fill(false));
    
    // Base Case: sum 0 is always possible with 0 elements
    for (let i = 0; i <= n; i++) {
        memo[i][0] = true;
    }

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= target; j++) {
            if (stones[i - 1] <= j) {
                // Pick it or leave it
                memo[i][j] = memo[i - 1][j] || memo[i - 1][j - stones[i - 1]];
            } else {
                // Cannot pick it
                memo[i][j] = memo[i - 1][j];
            }
        }
    }

    // Now find the maximum j for which memo[n][j] is true
    for (let j = target; j >= 0; j--) {
        if (memo[n][j]) {
            return totalSum - 2 * j;
        }
    }

    return 0;
}
