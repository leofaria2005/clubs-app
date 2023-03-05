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
app.use('/api/users', require('./routes/userRoutes'))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')));
  
    app.get('*', (req, res) =>
      res.sendFile(
        path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
      )
    );
  } else {
    app.get('/', (req, res) => res.send('Please set to production'));
  }
  

app.use(errorHandler)

app.listen(port, () =>  console.log( `Server started on port ${port}`))