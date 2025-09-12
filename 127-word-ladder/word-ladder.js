/**
 * Word Ladder - Bidirectional BFS (Optimal)
 * Time: O(N * L)  |  Space: O(N)
 *   N = number of words, L = word length
 */
var ladderLength = function(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;

  let beginSet = new Set([beginWord]);
  let endSet = new Set([endWord]);
  let visited = new Set();
  let steps = 1;

  while (beginSet.size > 0 && endSet.size > 0) {
    // Always expand smaller frontier
    if (beginSet.size > endSet.size) {
      [beginSet, endSet] = [endSet, beginSet];
    }

    const nextLevel = new Set();

    for (let word of beginSet) {
      const neighbors = getNeighbors(word);
      for (let next of neighbors) {
        if (endSet.has(next)) return steps + 1;
        if (wordSet.has(next) && !visited.has(next)) {
          visited.add(next);
          nextLevel.add(next);
        }
      }
    }
    beginSet = nextLevel;
    steps++;
  }

  return 0;
};

// \U0001f511 Generate all possible neighbors by one-letter change
function getNeighbors(word) {
  const neighbors = [];
  const alph = 'abcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < word.length; i++) {
    for (const ch of alph) {
      if (ch === word[i]) continue;
      neighbors.push(word.slice(0, i) + ch + word.slice(i + 1));
    }
  }
  return neighbors;
}
