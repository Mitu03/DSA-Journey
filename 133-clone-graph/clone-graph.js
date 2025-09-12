/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */


/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if (!node) return null; // \U0001f6a8 Empty graph edge case

    const visited = new Map(); // oldNode -> clonedNode

    const dfs = (curr) => {
        // If already cloned, just return it (avoid infinite cycles)
        if (visited.has(curr)) return visited.get(curr);

        // Create clone of current node (neighbors filled later)
        const clone = new Node(curr.val);
        visited.set(curr, clone);

        // Recursively clone neighbors
        for (let neighbor of curr.neighbors) {
            clone.neighbors.push(dfs(neighbor));
        }

        return clone;
    };

    return dfs(node);
};