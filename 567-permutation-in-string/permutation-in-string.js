/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function checkInclusion(s1, s2) {
  if (s1.length > s2.length) return false;

  let need = new Map();
  let have = new Map();

  // Step 1: Count frequency of s1
  for (let char of s1) {
    need.set(char, (need.get(char) || 0) + 1);
  }

  let left = 0, right = 0;
  let matched = 0;

  // Step 2: Sliding window
  while (right < s2.length) {
    let char = s2[right];
    right++;

    if (need.has(char)) {
      have.set(char, (have.get(char) || 0) + 1);
      if (have.get(char) === need.get(char)) {
        matched++;
      }
    }

    // Step 3: Shrink window if larger than s1
    while (right - left > s1.length) {
      let leftChar = s2[left];
      left++;

      if (need.has(leftChar)) {
        if (have.get(leftChar) === need.get(leftChar)) {
          matched--;
        }
        have.set(leftChar, have.get(leftChar) - 1);
      }
    }

    // Step 4: Check match
    if (matched === need.size) return true;
  }

  return false;
}

// Example usage
console.log(checkInclusion("ab", "eidbaooo")); // true
console.log(checkInclusion("ab", "eidboaoo")); // false
