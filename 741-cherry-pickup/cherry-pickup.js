/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function(grid) {
    const n = grid.length;
    const memo = new Map();

    function dp(r1, c1, r2) {
        const c2 = r1 + c1 - r2; // since steps taken by both are same
        if (r1 >= n || c1 >= n || r2 >= n || c2 >= n) return -Infinity; // out of bounds
        if (grid[r1][c1] === -1 || grid[r2][c2] === -1) return -Infinity; // thorn
        if (r1 === n-1 && c1 === n-1) return grid[r1][c1]; // reached end

        const key = `${r1},${c1},${r2}`;
        if (memo.has(key)) return memo.get(key);

        // cherries collected in this step
        let cherries = 0;
        if (r1 === r2 && c1 === c2) {
            cherries = grid[r1][c1]; // same cell, count once
        } else {
            cherries = grid[r1][c1] + grid[r2][c2]; // different cells
        }

        // explore next moves
        const next = Math.max(
            dp(r1+1, c1, r2+1), // both down
            dp(r1, c1+1, r2),   // p1 right, p2 down
            dp(r1+1, c1, r2),   // p1 down, p2 right
            dp(r1, c1+1, r2+1)  // both right
        );

        cherries += next;
        memo.set(key, cherries);
        return cherries;
    }

    return Math.max(0, dp(0,0,0)); // if impossible, return 0
};
