

const arr = ['上海', '北京', '广州', '深圳']

function sortChinese(arr) {
    arr.sort((a, b) => {
        return a.localeCompare(b, 'zh-CN')
    })
}
sortChinese(arr)

console.log(arr)