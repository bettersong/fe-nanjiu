const express = require('express')

const app = express()

app.get('/api/getInfo', (req, res) => {
    res.json({
        code: 200,
        data: {
            name: 'nanjiu',
            age: 18
        }
    })
})

app.listen(3000, () => {
    console.log('服务已启动～')
})