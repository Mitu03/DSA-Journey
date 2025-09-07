/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if (!grid || grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;

  // Directions: up, down, left, right
  const directions = [
    [1, 0], [-1, 0], [0, 1], [0, -1]
  ];

  function bfs(r, c) {
    const queue = [[r, c]];
    grid[r][c] = "0"; // mark visited

    while (queue.length) {
      const [x, y] = queue.shift();

      for (const [dx, dy] of directions) {
        const nx = x + dx, ny = y + dy;
        if (
          nx >= 0 && nx < rows &&
          ny >= 0 && ny < cols &&
          grid[nx][ny] === "1"
        ) {
          grid[nx][ny] = "0"; // mark visited
          queue.push([nx, ny]);
        }
      }
    }
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "1") {
        count++;
        bfs(r, c); // explore full island
      }
    }
  }

  return count;
};
