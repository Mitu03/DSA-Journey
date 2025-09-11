/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    // DFS function → explores the whole island starting from (r, c)
    function dfs(r, c) {
        // 1. Boundary + water check
        if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === 0) {
            return 0;
        }

        // 2. Mark cell as visited (turn land → water to avoid re-visiting)
        grid[r][c] = 0;

        // 3. Explore all 4 directions & sum up the area
        let area = 1; // current cell
        area += dfs(r + 1, c); // down
        area += dfs(r - 1, c); // up
        area += dfs(r, c + 1); // right
        area += dfs(r, c - 1); // left

        return area;
    }

    let maxArea = 0;

    // Main loop → scan every cell in the grid
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 1) {
                // Found an island → run DFS to compute its area
                const currentArea = dfs(r, c);
                maxArea = Math.max(maxArea, currentArea);
            }
        }
    }

    return maxArea;
};
