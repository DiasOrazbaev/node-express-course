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

app.get('/users/:id', function (req,res) {
    console.log(req.params.id)
    res.json({
        success: true,
        message: 'got one user',
        user: req.params.id
    })
})

app.listen(8000, function () {
    console.log(`server is running`)
})