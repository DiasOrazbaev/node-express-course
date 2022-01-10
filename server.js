const express = require('express')
const app = express()

const mookUserData = [
    {name: "Mark"},
    {name: "Jame"}
]

app.get('/users', function (req,res) {
    res.json({
        success: true,
        message: 'Successful got users',
        users: mookUserData
    })
})

app.listen(8000, function () {
    console.log(`server is running`)
})