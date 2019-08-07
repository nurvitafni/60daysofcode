const express = require('express')
const app = express()

app.use(express.urlencoded({extended: true}))
// app.get('/', (req, res) => res.send('Hello world'))

app.get('/', (req, res) => {
    // var x, y, z;
    // x = 7;
    // y = 3;
    // z = x + y;
    var cars = [
        "Saab",
        "Volvo",
        "BMW"
      ];

    return res.send("Macam-macam mobil yakni " + cars)
})

app.post('/', (req, res) => {
    let email = req.body.email

    return res.send('The email value is ' + email)
})

app.listen(8002, () => {
    console.log('Example app listening to port 8001')
})