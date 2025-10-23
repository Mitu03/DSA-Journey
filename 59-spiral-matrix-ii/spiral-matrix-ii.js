/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const matrix = Array.from({ length: n }, () => Array(n).fill(0));
  let top = 0,
    bottom = n - 1,
    left = 0,
    right = n - 1;
  let num = 1;

  while (num <= n * n) {
    // Left → Right
    for (let i = left; i <= right; i++) matrix[top][i] = num++;
    top++;

    // Top → Bottom
    for (let i = top; i <= bottom; i++) matrix[i][right] = num++;
    right--;

    // Right → Left
    for (let i = right; i >= left; i--) matrix[bottom][i] = num++;
    bottom--;

    // Bottom → Top
    for (let i = bottom; i >= top; i--) matrix[i][left] = num++;
    left++;
  }

  return matrix;
};