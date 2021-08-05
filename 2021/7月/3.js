
const arr = [1,2,[3,4],[5,[6,7,[8,9]]]]
function flat(arr) {
    return arr.reduce((acc,val)=>{
        return Array.isArray(val) ? acc.concat(flat(val)):acc.concat(val)
    },[])
}

console.log(flat(arr))
