// 2. 将格式为以下的两条json 数组合并为一条json数组， 并且合并后的json数组需要根据id从小到大排序.
    var jsonArray1 = [{
            id: 9,
            name: "zhangsan"
        },
        {
            id: 5,
            name: "lisi"
        },
        {
            id: 7,
            name: "wanglaowu"
        }
    ]
    var jsonArray2 = [{
            id: 2,
            name: "lihua"
        },
        {
            id: 6,
            name: "zhaoxin"
        },
        {
            id: 10,
            name: "wusan"
        }
    ]

function sortById(jsonArray1, jsonArray2) {
    //请按照题目要求实现函数内容，并返回符合题目要求的对象
    // 先合并数组
    var newArr = jsonArray1.concat(jsonArray2)
    // 再采用冒泡排序
    for (let i = 0; i < newArr.length; i++) {
        for (let j = i; j < newArr.length; j++) {
            if (newArr[i].id > newArr[j].id) {
                [newArr[i], newArr[j]] = [newArr[j], newArr[i]]
            }
        }
    }
    return newArr
}
console.log(sortById(jsonArray1, jsonArray2))