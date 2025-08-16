/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let left = 0;                       // window start
    let maxLen = 0;                     // result
    let basket = new Map();             // holds fruit -> count

    for (let right = 0; right < fruits.length; right++) {
        let fruit = fruits[right];
        basket.set(fruit, (basket.get(fruit) || 0) + 1); // add current fruit

        // If more than 2 types → shrink window
        while (basket.size > 2) {
            let leftFruit = fruits[left];
            basket.set(leftFruit, basket.get(leftFruit) - 1);
            if (basket.get(leftFruit) === 0) {
                basket.delete(leftFruit);
            }
            left++;
        }

        // Update answer (window size)
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
};
