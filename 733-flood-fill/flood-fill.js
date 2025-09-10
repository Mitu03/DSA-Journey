/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
  const rows = image.length, cols = image[0].length;
  const startColor = image[sr][sc];
  if (startColor === newColor) return image; // nothing to do

  function dfs(r, c) {
    // Out of bounds or not the target color → stop
    if (r < 0 || c < 0 || r >= rows || c >= cols) return;
    if (image[r][c] !== startColor) return;

    // Fill the pixel
    image[r][c] = newColor;

    // Explore neighbors
    dfs(r + 1, c); // down
    dfs(r - 1, c); // up
    dfs(r, c + 1); // right
    dfs(r, c - 1); // left
  }

  dfs(sr, sc);
  return image;
};
