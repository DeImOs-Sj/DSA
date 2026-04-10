// maximum depth of the tree using bfs

//output = 3 



function TreeStructure(val){
    this.val=val
    this.left=null
    this.right=null
}

function maxDepth(array){
    let root = new TreeStructure(array[0])
    let queue = [root]
    let i = 1
    let height = 0
    while(queue.length){
        let size = queue.length



        for(let j= 0;j<size;j++){
            let current = queue.shift()

            if(i<array.length){
                current.left = new TreeStructure(array[i])
                queue.push(current.left)
            }
            i++
            if(i<array.length){
                current.right= new TreeStructure(array[i])
                queue.push(current.right)
            }
            i++
        }
        height ++
    }
    return height

    

}










let a = [1,2,3,4,5,6,7,8,9,10]
console.log(maxDepth(a))