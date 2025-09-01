/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let i = 0; // pointer for s
    let j = 0; // pointer for t

    // Traverse both strings
    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            i++; // move s pointer if match
        }
        j++; // always move t pointer
    }

    // if i reached the end of s, then s is subsequence of t
    return i === s.length;
};
