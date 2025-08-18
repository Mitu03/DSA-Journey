/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (s.length < t.length) return "";

    // Step 1: Store frequencies of t
    let need = new Map();
    for (let char of t) {
        need.set(char, (need.get(char) || 0) + 1);
    }

    let have = new Map();
    let required = need.size;  // unique chars needed
    let formed = 0;            // unique chars satisfied

    let l = 0, r = 0;
    let minLen = Infinity, start = 0;

    while (r < s.length) {
        let char = s[r];
        have.set(char, (have.get(char) || 0) + 1);

        if (need.has(char) && have.get(char) === need.get(char)) {
            formed++;
        }

        // Try to shrink window from left
        while (l <= r && formed === required) {
            if (r - l + 1 < minLen) {
                minLen = r - l + 1;
                start = l;
            }

            let leftChar = s[l];
            have.set(leftChar, have.get(leftChar) - 1);

            if (need.has(leftChar) && have.get(leftChar) < need.get(leftChar)) {
                formed--;
            }
            l++;
        }

        r++;
    }

    return minLen === Infinity ? "" : s.substring(start, start + minLen);
};
