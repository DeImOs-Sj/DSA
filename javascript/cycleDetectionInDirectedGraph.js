let adjList = [[1], [2], [3], []]
let adjLen = adjList.length;
let visitedArray = new Array(adjLen).fill(0);
let visitedPath = new Array(adjLen);

function dfs(node, visitedPath, visitedArray) {
  visitedArray[node] = 1;
  visitedPath[node] = 1;

  for (let adjNodes of adjList[node]) {
    if (!visitedArray[adjNodes]) {
      if (dfs(adjNodes, visitedPath, visitedArray) === true) {
        return true;
      }
    } else if (visitedPath[adjNodes] === 1) {
      return true;
    }
  }

  visitedPath[node] = 0;
  return false;
}

function cycleDetectionInDirectedGraph() {
  for (let i = 0; i < adjLen; i++) {
    if (!visitedArray[i]) {
      if (dfs(i, visitedPath, visitedArray) === true) {
        return true;
      }
    }
  }
  return false;
}

console.log(cycleDetectionInDirectedGraph());
