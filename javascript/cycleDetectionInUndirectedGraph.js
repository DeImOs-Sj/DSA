// given
const adjList = [
    [1],
    [0, 2],
    [1, 3],
    [2]
];
// solving using bfs
function bfs(i, adjList, visitedMap) {
  // need to traverse the adjacency list using queue
  let queue = [];
  queue.push({ start: i, initialValue: -1 });
  visitedMap[i] = true;

  while (queue.length != 0) {
    let elems = queue[0];
    let startElem = elems.start;
    let parent = elems.initialValue;

    queue.shift();
    for (let neighbor of adjList[startElem]) {
      if (!visitedMap[neighbor]) {
        visitedMap[neighbor] = true;
        queue.push({
          start: neighbor,
          initialValue: startElem,
        });
      } else if (neighbor != parent) {
        return true;
      }
    }
  }

  return false;
}

function cycleDetection() {
  let vertices = adjList.length;
  let visited = Array(vertices).fill(false);

  for (let i = 0; i < vertices; i++) {
    if (!visited[i]) {
      if (bfs(i, adjList, visited)) {
        return true;
      }
    }
  }
  return false;
}

console.log(cycleDetection()); 
