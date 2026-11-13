class Solution {
    dfs(node, adj, visited, stack) {
        visited[node] = true;
        let neighbors = adj[node];
        
        for (let elem of neighbors) {
            if (!visited[elem]) {
                this.dfs(elem, adj, visited, stack);
            }
        }
        stack.push(node);
    } 

    topoSort(V, adj) {
        let stack = [];
        let visited = new Array(V).fill(false);
        
        for (let i = 0; i < V; i++) {
            if (!visited[i]) {
                this.dfs(i, adj, visited, stack);
            }
        }
        
        let output = [];
        while (stack.length > 0) {
            let elem = stack.pop();
            output.push(elem);
        }
        
        return output;
    }
}
