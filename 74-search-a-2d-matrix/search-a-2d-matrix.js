/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (!matrix.length || !matrix[0].length) return false;

  const m = matrix.length;
  const n = matrix[0].length;
  let left = 0,
    right = m * n - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midValue = matrix[Math.floor(mid / n)][mid % n];

    if (midValue === target) return true;
    else if (midValue < target) left = mid + 1;
    else right = mid - 1;
  }

  return false;
};