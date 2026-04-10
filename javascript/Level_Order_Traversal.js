
function tree(val){
  this.val=val
  this.left=null
  this.right=null
}


function levelOrder(array){
  let root = new tree(array[0])
  let queue = [root]
  let result = []
  let i = 1


  while(queue.length){
    let size = queue.length
    let level = []

    for(let j=0;j<size;j++)
    {
      let current = queue.shift()
      level.push(current.val)


      if(i<array.length){
        current.left = new tree(array[i])
        queue.push(current.left)
      }
      i++
      if(i<array.length){
        current.right = new tree(array[i])
        queue.push(current.right)
      }
      i++
    }
    result.push(level)

  }
  return result

}




let a = [1,3,2,4,5,5,6]

console.log(levelOrder(a))