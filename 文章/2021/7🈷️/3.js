
const arr = [1,2,[3,4],[5,[6,7,[8,9]]]]
function flat(arr) {
    return arr.reduce((acc,val)=>{
        return Array.isArray(val) ? acc.concat(flat(val)):acc.concat(val)
    },[])
}

console.log(flat(arr))

function querystring(queryStr) {
    const [, query] = queryStr.split("?");
    if (query) {
      return query.split("&").reduce((pre, cur) => {
        const [key, val] = cur.split("=");
        if (pre[key]) {
          pre[key] = [...pre[key], decodeURIComponent(val)];
        } else {
          pre[key] = [decodeURIComponent(val)];
        }
        return pre;
      }, {});
    }
    return {};
  }

  console.log(querystring("https://www.baidu.com?q=sss&w=12wqqq&token=sjajvn193jjskaksl"))

  console.log('___________________________')
  console.log(a)
  
  function a(){}
  var a = 1

  A.prototype.a = () => console.log('aaaaa');
  Object.prototype.b = () => console.log('bbbbbb');
function A() {}
var a = new A();
a.b();
a.a();
// 怎么改造才能执行alert(1)呢？