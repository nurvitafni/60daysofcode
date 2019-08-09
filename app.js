const express = require('express')
const application = express()
const conditional = require("./lib/conditional")

// for parsing application/x-www-form-urlencoded
application.use(express.urlencoded({ extended: true }))

application.get('/', (req, res) => {
    return res.send("Welcome here, people.")
})

application.get('/task1', (req, res) => {
    // let input = req.body.input
    let input1 = req.query.input1
    let input2 = req.query.input2
    let result = conditional.checking_one(input1, input2)
    return res.send(result)

})

application.post('/task2', (req, res) => {
    let name = req.body.name
    let email = req.body.email
    let result = conditional.checking_two(name, email)
    return res.send(result)
    
})

application.listen(3000, () => {
    console.log('Example program listening to port 3000.')
})

