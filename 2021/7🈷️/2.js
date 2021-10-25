

function convert(num){
    const arr = ['A','B','C','D','E','F','G','H','I','J','k','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    const integer = Math.floor(num/arr.length);
    const model = num % arr.length
    console.log(integer,arr.length,model)

    if(num<=arr.length){
        // 一位字母
        return arr[num-1]
    }else if(model==0){
        return arr[integer-2]+arr[arr.length-1]
    }else{
        return arr[integer-1]+''+arr[model-1]
    }
}

console.log(convert(79))


// 例如：[10,21,0,-7,35,7,9,23,18] 输出 5, 7 最小
const arr = [10,21,0,-7,35,7,9,23,18]
function getIndex(arr){
    let index=null;
    index = arr.indexOf(Math.min(...arr.filter(item=>{return item>0})))
    return index;
}
console.log(getIndex(arr))

const list = [1, 2, 3]
const square = num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * num)
    }, 1000)
  })
}

async function test() {
//   list.forEach(async x=> {
//     const res = await square(x)
//     console.log(res)
//   })
 for(let i=0; i<list.length; i++){
     const res = await square(list[i])
     console.log(res)
 }
}
test()

// 将'10000000000'形式的字符串，以每3位进行分隔展示'10.000.000.000',多种实现方式

function formateNum(str){
    const res = [...str].reverse().map((v,i)=>{
        return i%3==2?`.${v}`:`${v}`
    }).reverse().join("")
    console.log(res)
}
formateNum('10000000000')

function formateNum2(str){
    console.log((+str).toLocaleString().replace(/,/g,'.'))
    console.log(str.replace(/\B(?=(\d{3})+(?!\d))/g, '.'))
}
formateNum2('10000000000')

// 求多个数组之间的交集 
function getArrSame(){
    console.log(arguments)
}
getArrSame()

// 
let a = {v:1};
a = new Proxy(a,{
    get(){
        return a.v = 2;
    }
})
console.log(a.v)
