const express = require('express')
const app = express()
const array_sort = require("./lib/array-sort")

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// app.get('/', (req, res) => {
// 	let buah = ["Mangga", "Jeruk", "Pisang", "Anggur", "Nanas"]

// 	return res.send("Urutan nama buah secara ascending: " + buah.sort())
// })

app.get('/task1', (req, res) => {
	let warna = ["Grey", "Blue", "Yellow", "Green"]
	
	let hasil = array_sort.ascending_sort(warna)

	return res.send(hasil)

})

app.get('/task2', (req, res) => {
	let warna = ["Grey", "Blue", "Yellow", "Green"]

	let hasil = array_sort.descending_sort(warna)

	return res.send(hasil)

})

app.listen(3300, () => {
    console.log(`Example app listening on port 3300`)
})