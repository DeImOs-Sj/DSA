function TreeStructure(val){
    this.val = val
    this.left = null
    this.right = null
}



function height(root){
    if (root === null) return 0;  // ✅ base case

    let leftHeight = height(root.left);
    let rightHeight = height(root.right);

    return 1 + Math.max(leftHeight, rightHeight);
}
let root = new TreeStructure(1)
root.left = new TreeStructure(2)
root.right = new TreeStructure(3)
root.left.left = new TreeStructure(4)
root.left.left.left = new TreeStructure(69)
root.left.right = new TreeStructure(5)
root.right.left = new TreeStructure(6)
root.right.right = new TreeStructure(7)

console.log(height(root))