const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const { json } = require('body-parser')
const axios = require('axios')
const controller = require('./controller')

const app = express()

const { CONNECTION_STRING, PORT } = process.env

console.log(CONNECTION_STRING, PORT)
console.log(controller)

//middleware (app.use)
app.use(express.json())
app.use(cors())
app.use(json())

const { parsed: config } = dotenv

//Routes (app.get, post, put, delete)
//app.post('/api/register/:id', controller.addUser)
app.post('/api/register', controller.addUser)

app.post('/api/recipes', controller.addRecipe)

app.get('/api/recipes', controller.getRecipe)

app.get('/api/users', controller.getUserID)

app.patch('/api/recipes/:id', controller.setImage)

app.delete('/api/recipes/:id', controller.deleteRecipe)

const BASE_URL = `https://api.cloudinary.com/v1_1/${config.CLOUD_NAME}/resources/image`

const auth = {
  username: config.API_KEY,
  password: config.API_SECRET,
}

app.get(`/photos`, async (req, res) => {
  const response = await axios.get(BASE_URL, {
    auth,
  })

  return res.send(response.data)
})

app.listen(PORT, () => console.log(`Running on ${PORT}`))
