function TreeStructure(val){
    this.val = val
    this.left= null
    this.right = null
}

// right view of the tree


function treeLeftView(array){

    let root = new TreeStructure(array[0])
    let queue = [root]
    let i = 1
    let result = []

    while(queue.length){
        let size = queue.length

        for(let j=0;j<size;j++){

            let current = queue.shift()

            // ✅ LEFT VIEW
            if (j === size-1) {
                result.push(current.val)
            }

            if(i < array.length){
                current.left = new TreeStructure(array[i])
                queue.push(current.left)
                i++
            }

            if(i < array.length){
                current.right = new TreeStructure(array[i])
                queue.push(current.right)
                i++
            }
        }
    }

    return result
}






let a = [1,2,3,4,5,6,7,8]


console.log(treeLeftView(a))