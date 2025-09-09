var solve = function(board) {
  const m = board.length;
  const n = board[0].length;

  // \U0001f539 DFS to mark safe regions
  function dfs(r, c) {
    if (r < 0 || c < 0 || r >= m || c >= n || board[r][c] !== 'O') return;
    board[r][c] = 'S'; // mark as Safe (connected to border)
    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  }

  // 1️⃣ Mark all border-connected O's as safe
  for (let i = 0; i < m; i++) {
    dfs(i, 0);         // left border
    dfs(i, n - 1);     // right border
  }
  for (let j = 0; j < n; j++) {
    dfs(0, j);         // top border
    dfs(m - 1, j);     // bottom border
  }

  // 2️⃣ Flip surrounded O's → X, and Safe S → O
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 'O') board[i][j] = 'X'; // captured
      else if (board[i][j] === 'S') board[i][j] = 'O'; // restore safe
    }
  }
};
