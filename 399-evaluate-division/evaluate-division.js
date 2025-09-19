/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    // Step 1: Build graph (Adjacency list with weights)
    const graph = new Map();
    
    const addEdge = (a, b, val) => {
        if (!graph.has(a)) graph.set(a, []);
        graph.get(a).push([b, val]);
    };
    
    for (let i = 0; i < equations.length; i++) {
        const [a, b] = equations[i];
        const val = values[i];
        addEdge(a, b, val);
        addEdge(b, a, 1 / val);
    }

    // Step 2: DFS to evaluate query
    const dfs = (src, dst, visited) => {
        if (!graph.has(src) || !graph.has(dst)) return -1.0;
        if (src === dst) return 1.0;

        visited.add(src);

        for (const [nei, val] of graph.get(src)) {
            if (visited.has(nei)) continue;
            const product = dfs(nei, dst, visited);
            if (product !== -1.0) return val * product;
        }

        return -1.0;
    };

    // Step 3: Answer queries
    const results = [];
    for (const [c, d] of queries) {
        results.push(dfs(c, d, new Set()));
    }

    return results;
};