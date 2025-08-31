/**
 * Convert Integer to Roman
 * @param {number} num
 * @return {string}
 */
function intToRoman(num) {
    // 1️⃣ Mapping of Roman symbols to their values (include subtractive forms)
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    let result = "";

    // 2️⃣ Loop through all values
    for (let i = 0; i < values.length; i++) {
        // While num is still larger than the value, keep subtracting
        while (num >= values[i]) {
            num -= values[i];     // reduce number
            result += symbols[i]; // append roman symbol
        }
    }

    // 3️⃣ Return final Roman numeral
    return result;
}

