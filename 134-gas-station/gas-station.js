/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let totalBalance = 0;    // total net gas
    let currentBalance = 0;  // running balance for current start
    let start = 0;           // candidate starting station

    for (let i = 0; i < gas.length; i++) {
        let gain = gas[i] - cost[i];
        totalBalance += gain;
        currentBalance += gain;

        // If we run out of gas here, restart from next station
        if (currentBalance < 0) {
            start = i + 1;
            currentBalance = 0;
        }
    }

    // If overall gas < cost → impossible
    return totalBalance >= 0 ? start : -1;
};
