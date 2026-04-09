// level wise bfs using queue


function TreeStructure(val){
  this.val=val
  this.left= null
  this.right=null
}




function ConstructTree(array){
  let root = new TreeStructure(array[0])
  let level = []
  let queue = [root]
  let i = 1

  while(i<array.length){
    let current = queue.shift()
    level.push(current)

    if(array[i] !== null){
      current.left = new TreeStructure(array[i])
      queue.push(current.left)
    }
i++;
if(array[i] !== null && array.length !== 0){
current.right= new TreeStructure(array[i])
queue.push(current.right)
}
i++
level.push(current.left,current.right)


  }

  return level

}






let array = [1,2,3,4,5,6,7,8]


console.log(ConstructTree(array))