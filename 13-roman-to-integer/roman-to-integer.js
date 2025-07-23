/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanMap = {
        I: 1, V: 5, X: 10,
        L: 50, C: 100,
        D: 500, M: 1000
    };
    
    let total = 0;

    for (let i = 0; i < s.length; i++) {
        const curr = romanMap[s[i]];
        const next = romanMap[s[i + 1]];

        // If the current value is less than the next value, subtract it
        if (next > curr) {
            total += next - curr;
            i++; // Skip the next character
        } else {
            total += curr;
        }
    }

    return total;
};