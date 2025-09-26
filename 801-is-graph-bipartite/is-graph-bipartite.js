/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    const n = graph.length;
    const colors = new Array(n).fill(0); // 0 = uncolored, 1 = color1, -1 = color2

    // Helper BFS function to color the graph starting from node `start`
    const bfs = (start) => {
        const queue = [start];
        colors[start] = 1; // start coloring with 1

        while (queue.length) {
            const node = queue.shift();
            for (const neighbor of graph[node]) {
                if (colors[neighbor] === 0) {
                    // color with opposite color
                    colors[neighbor] = -colors[node];
                    queue.push(neighbor);
                } else if (colors[neighbor] === colors[node]) {
                    // conflict found
                    return false;
                }
            }
        }
        return true;
    };

    // The graph may be disconnected, so check each component
    for (let i = 0; i < n; i++) {
        if (colors[i] === 0 && !bfs(i)) {
            return false;
        }
    }

    return true;
};
