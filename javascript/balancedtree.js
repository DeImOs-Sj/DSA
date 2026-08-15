function tree(val){
    this.val=val
    this.left = null
    this.right = null

}

function checkBalancedTree(root){
    let isBalanced=true

    function checkHeight(node){
        if (node === null) return 0
        let leftHeight = checkHeight(node.left)
        let rightHeight = checkHeight(node.right)

        if(Math.abs(leftHeight-rightHeight)>1){
            isBalanced=false
        }
        return 1+Math.max(leftHeight,rightHeight)

    }
    checkHeight(root)



    return isBalanced
}




let root = new tree(1)
root.left = new tree(2)
root.left.left = new tree(3)
root.left.left.left = new tree(4)

root.right = new tree(5)

console.log(checkBalancedTree(root))