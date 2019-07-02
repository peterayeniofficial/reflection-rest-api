// import express
const express = require('express')
import bodyParser from 'body-parser'

// initialized server
const app = express()

app.use(bodyParser())

app.get('/', (req, res) => {
    return res.status(200).send({'message':'Welcome to our Server'})
})

app.listen(3000, ()=>{
    console.log('App running on port ', 3000)
})