function prepareAdjList(adjList, edges) {
  for (let i = 0; i < edges.length; i++) {
    // Assuming edges are passed as an array of pairs, e.g., [[u, v], ...]
    let u = edges[i][0];
    let v = edges[i][1];

    if (!adjList.has(u)) adjList.set(u, []);
    if (!adjList.has(v)) adjList.set(v, []);

    adjList.get(u).push(v);
    adjList.get(v).push(u);
  }
}

function bfs(adjList, visited, ans, startNode) {
  let queue = [];
  queue.push(startNode);
  visited.set(startNode, true);

  while (queue.length > 0) {
    let frontNode = queue.shift(); // Remove from the front
    ans.push(frontNode);

    // Get neighbors safely from the Map
    let neighbors = adjList.get(frontNode) || [];
    for (let neighbor of neighbors) {
      if (!visited.get(neighbor)) {
        queue.push(neighbor);
        visited.set(neighbor, true);
      }
    }
  }
}

function BFSGraphTraversal(vertexCount, edges) {
  let adjList = new Map();
  let ans = [];
  let visited = new Map();

  prepareAdjList(adjList, edges);

  // Traverse all components of a graph
  for (let i = 0; i < vertexCount; i++) {
    if (!visited.get(i)) {
      bfs(adjList, visited, ans, i);
    }
  }

  return ans;
}

// Example test case: 4 vertices (0 to 3), 3 edges
const edges = [[0, 1], [1, 2], [2, 3]];
console.log(BFSGraphTraversal(4, edges)); 
// Output: [0, 1, 2, 3] (or similar valid BFS traversal order)
