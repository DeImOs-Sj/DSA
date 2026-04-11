function TreeStructure(val){
    this.val = val
    this.left= null
    this.right = null
}

// right view of the tree


function treeRightView(array){

    let root = new TreeStructure(array[0])
    let queue = [root]
    let i = 1
    let result = []
    let rightView = []

    while(queue.length){
        let size = queue.length
        let level = []
        

        for(let j=0;j<size;j++)
        {

            
            let current = queue.shift()

            level.push(current.val)
            

            if(i<array.length){
                current.left = new TreeStructure(array[i])
                queue.push(current.left)
            }
            i++
            if(i<array.length){
                current.right = new TreeStructure(array[i])
                queue.push(current.right)
            }
            i++
        }
        result.push(level.shift())

    }
    return result
    



}






let a = [1,2,3,4,5,6,7,8]


console.log(treeRightView(a))