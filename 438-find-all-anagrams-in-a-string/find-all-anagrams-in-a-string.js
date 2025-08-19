/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
function findAnagrams(s, p) {
  const result = [];
  if (s.length < p.length) return result;

  const pCount = new Map();
  const sCount = new Map();

  // Count frequency of chars in p
  for (let char of p) {
    pCount.set(char, (pCount.get(char) || 0) + 1);
  }

  // Sliding window
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    let char = s[right];
    sCount.set(char, (sCount.get(char) || 0) + 1);

    // Shrink window if size > p.length
    if (right - left + 1 > p.length) {
      let leftChar = s[left];
      sCount.set(leftChar, sCount.get(leftChar) - 1);
      if (sCount.get(leftChar) === 0) sCount.delete(leftChar);
      left++;
    }

    // Check if counts match
    if (right - left + 1 === p.length) {
      let isMatch = true;
      for (let [key, val] of pCount) {
        if (sCount.get(key) !== val) {
          isMatch = false;
          break;
        }
      }
      if (isMatch) result.push(left);
    }
  }

  return result;
}
