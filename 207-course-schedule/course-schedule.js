/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    // Step 1: Build adjacency list and indegree array
    const graph = Array.from({ length: numCourses }, () => []);
    const indegree = new Array(numCourses).fill(0);

    for (let [course, pre] of prerequisites) {
        graph[pre].push(course);
        indegree[course]++;
    }

    // Step 2: Collect all courses with indegree 0 (no prereqs)
    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] === 0) queue.push(i);
    }

    // Step 3: BFS (Topological Sort)
    let count = 0;
    while (queue.length) {
        let curr = queue.shift();
        count++;

        for (let next of graph[curr]) {
            indegree[next]--;
            if (indegree[next] === 0) queue.push(next);
        }
    }

    // Step 4: If we visited all courses, return true
    return count === numCourses;
};
