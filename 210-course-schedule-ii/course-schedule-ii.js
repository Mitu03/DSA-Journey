/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    // 1) Build graph & indegree array
    const graph = new Map();
    const indegree = new Array(numCourses).fill(0);

    for (let [course, prereq] of prerequisites) {
        if (!graph.has(prereq)) graph.set(prereq, []);
        graph.get(prereq).push(course);
        indegree[course]++;
    }

    // 2) Queue init with courses having 0 indegree (no prereqs)
    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] === 0) queue.push(i);
    }

    // 3) BFS (Kahn’s Algorithm)
    const order = [];
    while (queue.length > 0) {
        const curr = queue.shift();
        order.push(curr);

        if (graph.has(curr)) {
            for (let next of graph.get(curr)) {
                indegree[next]--;
                if (indegree[next] === 0) queue.push(next);
            }
        }
    }

    // 4) Check if all courses are taken
    return order.length === numCourses ? order : [];
};
