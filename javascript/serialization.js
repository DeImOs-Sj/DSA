function TreeNode(val){
    this.val=val
    this.left = null
    this.right = null
}


function serialize(root){
    if(!root) return
        return root.val+","+serialize(root.left)+','+serialize(root.right)
}


let root = new TreeNode(1)
root.left= new TreeNode(2)
root.right= new TreeNode(3)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)


let str = serialize(root);
console.log(str); 