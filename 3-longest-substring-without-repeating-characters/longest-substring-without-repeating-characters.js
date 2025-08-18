/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
    let set = new Set();  // keeps track of unique chars in current window
    let left = 0;         // left pointer of sliding window
    let maxLen = 0;

    for (let right = 0; right < s.length; right++) {
        // If character already exists, shrink window from left
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}
