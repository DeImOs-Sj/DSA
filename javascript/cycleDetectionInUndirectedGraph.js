let adjList = [[1, 2], [0, 2], [0, 1, 3], [2]];
// const adjList = [[1], [0, 2], [1, 3], [2]];
let adjLen = adjList.length;
let visitedArray = new Array(adjLen).fill(false);

function bfs(i) {
  let queue = [];
  queue.push({ node: i, parent: -1 });
  visitedArray[i] = true;

  while (queue.length != 0) {
    let temp = queue[0];
    let tempNode = temp.node;
    let tempParent = temp.parent;
    queue.shift();
    for (let neighbor of adjList[tempNode]) {
      if (!visitedArray[neighbor]) {
        visitedArray[neighbor] = true;
        queue.push({ node: neighbor, parent: tempNode });
      } else if (neighbor != tempParent) {
        return true;
      }
    }
  }
  return false;
}

function cycleDetection() {
  for (let i = 0; i < adjLen; i++) {
    if (!visitedArray[i]) {
      if (bfs(i)) {
        return true;
      }
    }
  }
  return false;
}

console.log(cycleDetection());
