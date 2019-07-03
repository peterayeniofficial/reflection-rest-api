// import express
const express = require('express')
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import ReflectionWithJsObject from './src/usingJSObject/controllers/reflection'
import ReflectionWithDB from './src/usingDB/controllers/reflection';

dotenv.config()
const Reflection = process.env.TYPE === 'db' ? ReflectionWithDB : ReflectionWithJsObject
// initialized server
const app = express()

app.use(bodyParser())

app.get('/', (req, res) => {
    return res.status(200).send({'message':'Welcome to our Server'})
})

app.post('/api/v1/reflections', Reflection.create)
app.get('/api/v1/reflections', Reflection.getAll)
app.get('/api/v1/reflections', Reflection.getOne)
app.put('/api/v1/reflections', Reflection.update)
app.delete('/api/v1/reflections', Reflection.delete)

app.listen(3000, ()=>{
    console.log('App running on port ', 3000)
})