function ConstructTree(val){
    this.val = val
    this.left = null
    this.right=null
}



function getDiameterOfTheTree(root){
    let maxDiameter=0
    function getHeightOfTheNode(node){
        if (!node) return 0 
        let left = getHeightOfTheNode(node.left)
        let right =getHeightOfTheNode(node.right)
        maxDiameter = Math.max(maxDiameter,left+right)
        return 1+Math.max(left,right)

    }
    getHeightOfTheNode(root)
    return maxDiameter
}





let root = new ConstructTree(1);
root.left = new ConstructTree(2);
root.right = new ConstructTree(3);
root.left.left = new ConstructTree(4);
root.left.right = new ConstructTree(5);
root.right.left = new ConstructTree(6);
root.right.right = new ConstructTree(7);
root.right.right.right = new ConstructTree(8);


console.log(getDiameterOfTheTree(root))