
/**
 * 对象数组转树结构
 */

 let arr = [
    {id: 1, name: '部门1', pid: 0},
    {id: 2, name: '部门2', pid: 3},
    {id: 3, name: '部门3', pid: 1},
    {id: 4, name: '部门3', pid: 0},
    {id: 5, name: '部门4', pid: 4},
    {id: 6, name: '部门5', pid: 0},
    {id: 7, name: '部门5', pid: 6},
    {id: 8, name: '部门5', pid: 7},
    {id: 9, name: '部门9', pid: 8}
  ]
  
  function arrayToTree(arr) {
      let tree = []  // 返回值
      const map = {}
      for(let i=0; i<arr.length; i++) {
          // 遍历数组，为每一项添加一个children属性
          arr[i].children = []
          // 并将数据存放在map中
          map[arr[i].id] = arr[i]
      }
      for(let item of arr) {
          if(map[item.pid]) {
              // 如果map中存在父节点，则将当前节点push进父节点的children中
              let parent = map[item.pid]
              parent.children.push(item)
          }else {
            // 否则就是没有父节点，则push进tree中
            tree.push(item)
          }
      }
      return tree
  }

  const tree = arrayToTree(arr)
  console.log(tree)

  // 树状结构转为对象数组

  function treeToArray(tree) {
      const arr = []
      
      function dfs(data) {
        data.forEach(item => {
            if(item.children) {
                dfs(item.children)
                delete item.children
            }
            arr.push(item)
        })
      }
      dfs(tree)
      return arr
  }

console.log(treeToArray(tree))


