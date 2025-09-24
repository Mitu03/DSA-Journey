/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    // Step 1: Build adjacency list (graph)
    const graph = {};
    for (let [from, to] of tickets) {
        if (!graph[from]) graph[from] = [];
        graph[from].push(to);
    }

    // Step 2: Sort adjacency lists in lexical order
    for (let key in graph) {
        graph[key].sort(); // ensures smallest lexical choice
    }

    const result = [];

    // Step 3: DFS with Hierholzer’s algorithm
    function dfs(airport) {
        const destList = graph[airport] || [];
        while (destList.length > 0) {
            // always pick smallest lexical airport
            const next = destList.shift();
            dfs(next);
        }
        // add airport when no further edges left
        result.push(airport);
    }

    dfs("JFK");

    // Step 4: Reverse result (post-order traversal)
    return result.reverse();
};
