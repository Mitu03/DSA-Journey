/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    // MinHeap implementation
    class MinHeap {
        constructor() {
            this.heap = [];
        }
        push([time, node]) {
            this.heap.push([time, node]);
            this._siftUp();
        }
        pop() {
            if (this.size() === 0) return null;
            const top = this.heap[0];
            const end = this.heap.pop();
            if (this.size() > 0) {
                this.heap[0] = end;
                this._siftDown();
            }
            return top;
        }
        size() {
            return this.heap.length;
        }
        _siftUp() {
            let i = this.size() - 1;
            while (i > 0) {
                let parent = Math.floor((i - 1) / 2);
                if (this.heap[i][0] >= this.heap[parent][0]) break;
                [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
                i = parent;
            }
        }
        _siftDown() {
            let i = 0, n = this.size();
            while (true) {
                let left = 2 * i + 1, right = 2 * i + 2, smallest = i;
                if (left < n && this.heap[left][0] < this.heap[smallest][0]) smallest = left;
                if (right < n && this.heap[right][0] < this.heap[smallest][0]) smallest = right;
                if (smallest === i) break;
                [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
                i = smallest;
            }
        }
    }

    // Step 1: Build adjacency list
    const graph = Array.from({ length: n + 1 }, () => []);
    for (let [u, v, w] of times) {
        graph[u].push([v, w]);
    }

    // Step 2: Dijkstra with MinHeap
    const dist = Array(n + 1).fill(Infinity);
    dist[k] = 0;
    const minHeap = new MinHeap();
    minHeap.push([0, k]); // [time, node]

    while (minHeap.size()) {
        const [time, node] = minHeap.pop();
        if (time > dist[node]) continue; // Skip outdated entry

        for (let [nei, w] of graph[node]) {
            const newTime = time + w;
            if (newTime < dist[nei]) {
                dist[nei] = newTime;
                minHeap.push([newTime, nei]);
            }
        }
    }

    // Step 3: Find max time
    let ans = Math.max(...dist.slice(1));
    return ans === Infinity ? -1 : ans;
};
