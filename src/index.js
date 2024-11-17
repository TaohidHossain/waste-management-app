const express = require('express')
const { connectDB } = require('./Configs')
const { PORT } = require('./Configs/serverConfig')
const { globalErrorHandler } = require('./Utils')

// Setup express app
const app = express()
//app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// Connect to database and run the app
connectDB()
    .then(conn => {
        console.log('Database connected successfullly.')
        const server = app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    })
    .catch(err => {
        console.log('Error connecting to database')
        console.log(err)
        console.log(err.errorResponse.message)
    })

// testing endpoint
app.get('/test', (req, res) => {
    res.status(200).send({ message: 'Hello World!'})
})

app.all('*', (req, res) => {
    res.status(404).send({
        "status" : "success",
        "message" : "This route does not exist"
    })
})
app.use(globalErrorHandler)