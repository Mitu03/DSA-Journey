/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  // Memo: dp[row][col1][col2]
  const memo = new Map();

  function dfs(r, c1, c2) {
    // Out of bounds
    if (c1 < 0 || c1 >= cols || c2 < 0 || c2 >= cols) return -Infinity;

    // Key for memo
    const key = `${r},${c1},${c2}`;
    if (memo.has(key)) return memo.get(key);

    // Current cherries
    let result = grid[r][c1];
    if (c1 !== c2) result += grid[r][c2]; // avoid double count

    // Base case: last row
    if (r === rows - 1) {
      memo.set(key, result);
      return result;
    }

    // Try all moves (3x3)
    let best = 0;
    for (let d1 = -1; d1 <= 1; d1++) {
      for (let d2 = -1; d2 <= 1; d2++) {
        best = Math.max(best, dfs(r + 1, c1 + d1, c2 + d2));
      }
    }

    result += best;
    memo.set(key, result);
    return result;
  }

  // Start: robot1 at (0,0), robot2 at (0, cols-1)
  return dfs(0, 0, cols - 1);
};
