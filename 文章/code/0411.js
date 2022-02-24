// A、B、C 是 3 个字符串。把 A 中包含的所有 B 都替换为 C，如果替换以后还有 B 就继续替
// 换，直到 A 不包含 B 为止。

function replaceAll(a,b,c) {
    if(a.indexOf(b) != -1) {
        var reg=new RegExp("("+b+")","g");  
        return a.replace(reg,c)
        
    }
    // return a
}

let a = 'qwertttwoewey'
let b = 'we'
let c = '123'
console.log(replaceAll(a,b,c))