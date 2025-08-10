/**
 * @param {string} digits
 * @return {string[]}
 */
function letterCombinations(digits) {
    if (!digits.length) return []; // No digits → no combinations

    // Mapping of digits to letters (like telephone keypad)
    const phoneMap = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    };

    const result = [];

    // Backtracking function
    function backtrack(index, current) {
        // Base case: when the combination length equals digits length
        if (index === digits.length) {
            result.push(current);
            return;
        }

        // Get the letters for the current digit
        const letters = phoneMap[digits[index]];

        // Try each letter and go deeper
        for (let char of letters) {
            backtrack(index + 1, current + char);
        }
    }

    backtrack(0, "");
    return result;
}

// Example usage:
console.log(letterCombinations("23"));
// Possible output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
