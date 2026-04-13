
function TreeStructure(val){
    this.val = val
    this.left = null
    this.right = null
}

function c(root){

if (root === null) return 0;


   c(root.left)
       console.log(root.val)

 c(root.right)



}


let root = new TreeStructure(1)
root.left = new TreeStructure(2)
root.right = new TreeStructure(3)
root.left.left = new TreeStructure(4)
root.left.right = new TreeStructure(5)
root.right.left = new TreeStructure(6)
root.right.right = new TreeStructure(7)


c(root)


//        1
//       / \
//     2    3
//   /  \   / \
// 4     5 6   7

