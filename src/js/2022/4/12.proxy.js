

const obj = {
    name: '前端南玖'
}

new Proxy(obj,{
    set() {
        console.log(this)
    }
})

obj.name = 'sss'