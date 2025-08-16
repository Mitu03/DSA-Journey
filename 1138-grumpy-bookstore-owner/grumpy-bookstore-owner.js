/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, minutes) {
    let n = customers.length;
    let baseSatisfied = 0;

    // Step 1: Count customers already satisfied when owner is not grumpy
    for (let i = 0; i < n; i++) {
        if (grumpy[i] === 0) {
            baseSatisfied += customers[i];
        }
    }

    // Step 2: Sliding window to maximize extra satisfied customers
    let extra = 0, maxExtra = 0;

    // First window
    for (let i = 0; i < minutes; i++) {
        if (grumpy[i] === 1) {
            extra += customers[i];
        }
    }
    maxExtra = extra;

    // Slide the window
    for (let i = minutes; i < n; i++) {
        if (grumpy[i] === 1) {
            extra += customers[i];
        }
        if (grumpy[i - minutes] === 1) {
            extra -= customers[i - minutes];
        }
        maxExtra = Math.max(maxExtra, extra);
    }

    return baseSatisfied + maxExtra;
};
