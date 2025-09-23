/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    // 1. Build adjacency list: {from: [[to, price], ...]}
    const graph = new Map();
    for (let [from, to, price] of flights) {
        if (!graph.has(from)) graph.set(from, []);
        graph.get(from).push([to, price]);
    }

    // 2. Min-heap: [costSoFar, node, stopsSoFar]
    const minHeap = [[0, src, 0]];

    // 3. Track best: best[node][stops] = min cost
    const best = Array.from({ length: n }, () => Array(k + 2).fill(Infinity));
    best[src][0] = 0;

    // 4. Process heap
    while (minHeap.length) {
        // extract node with minimum cost
        minHeap.sort((a, b) => a[0] - b[0]); // simple min-heap substitute
        const [cost, node, stops] = minHeap.shift();

        // ✅ If destination reached
        if (node === dst) return cost;

        // ❌ If exceeded stop limit
        if (stops > k) continue;

        // 5. Explore neighbors
        if (graph.has(node)) {
            for (let [nei, price] of graph.get(node)) {
                const newCost = cost + price;
                if (newCost < best[nei][stops + 1]) {
                    best[nei][stops + 1] = newCost;
                    minHeap.push([newCost, nei, stops + 1]);
                }
            }
        }
    }

    return -1; // No valid path
};
