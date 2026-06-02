function TreeStruct (val){
    this.val = val
    this.left = null
    this.right = null
}


function checkBalanceTree(root){


    let isBalanced = true
    function checkHeight(node){
        if(node === null) return 0 
        let leftHeight = checkHeight(node.left)
        let rightHeight = checkHeight(node.right)


        if(Math.abs(leftHeight-rightHeight)>1){
            isBalanced=false
        }

return 1 + Math.max(leftHeight, rightHeight);
    }
    checkHeight(root)
    return isBalanced



}






let root = new TreeStruct(1)
root.left = new TreeStruct(2)
// root.left.left = new TreeStruct(3)
// root.left.left.left = new TreeStruct(4)
// root.left.left.left.left = new TreeStruct(5)

root.right = new TreeStruct(6)

console.log(checkBalanceTree(root))