const express = require('express')
const router = express.Router()


router.get('/',(req,res)=>{
    res.render('home.ejs')
})

router.post('/login',(req,res)=>{
    console.log(req.body.username)
    let msg = 'failed'
    if(users.includes(req.body.username))msg = 'ok'
    res.send({
        message: msg,
    })
})



let users = [
    "kaushik",
    "nagasai"
]

module.exports = router