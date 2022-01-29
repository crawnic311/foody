require('dotenv').config()
const controller = require('./controller')
const { CONNECTION_STRING, PORT } = process.env
console.log(CONNECTION_STRING, PORT)
//console.log(process)
const express = require('express')
const app = express()
const cors = require('cors')

console.log(controller)

//middleware (app.use)
app.use(express.json())
app.use(cors())

//Routes (app.get, post, put, delete)
//app.post('/api/register/:id', controller.addUser)
app.post('/api/register', controller.addUser)

app.post('/api/recipes', controller.addRecipe)

app.get('/api/recipes', controller.getRecipe)

app.put('/api/recipes', controller.updateRecipesIDs)

app.delete('/api/recipes/:id', controller.deleteRecipe)

app.listen(PORT, () => console.log(`Running on ${PORT}`))
