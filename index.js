import express from 'express'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    return res.status(200).send({'message':'Welcome to our Server'})
})

app.listen(3000, ()=>{
    console.log('App running on port ', 3000)
})