/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var shortestPath = function(grid, k) {
    const m = grid.length, n = grid[0].length;
    
    // If k is large enough, we can just return Manhattan distance
    if (k >= m + n - 2) return m + n - 2;

    // BFS queue: [row, col, obstaclesRemoved, steps]
    const queue = [[0, 0, 0, 0]];

    // visited[row][col] = minimum obstacles removed to reach (row,col)
    const visited = Array.from({ length: m }, () => Array(n).fill(Infinity));
    visited[0][0] = 0;

    const dirs = [[1,0], [-1,0], [0,1], [0,-1]];

    while (queue.length > 0) {
        const [x, y, used, steps] = queue.shift();

        // Reached target
        if (x === m - 1 && y === n - 1) return steps;

        for (let [dx, dy] of dirs) {
            const nx = x + dx, ny = y + dy;
            
            if (nx >= 0 && nx < m && ny >= 0 && ny < n) {
                const newUsed = used + grid[nx][ny]; // if obstacle, +1
                
                // Only continue if within k and better than previous path
                if (newUsed <= k && newUsed < visited[nx][ny]) {
                    visited[nx][ny] = newUsed;
                    queue.push([nx, ny, newUsed, steps + 1]);
                }
            }
        }
    }
    
    return -1; // No path found
};
