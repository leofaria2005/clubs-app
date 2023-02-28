const express = require ('express')
const colors = require ('colors')
const dotenv = require ('dotenv').config()
const connectDB = require ('./config/db.js')
const port = process.env.PORT || 5000
const {errorHandler} = require('./middleware/errorMiddleware')
const app = express()

connectDB()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/clubs', require('./routes/clubRoutes'))

app.use(errorHandler)

app.listen(port, () =>  console.log( `Server started on port ${port}`))