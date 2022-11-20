
require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose') 

//express app
const app = express()
const workoutRoutes = require("./routes/workouts")


//MIDDLEWARE 
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})



app.use("/api/workouts", workoutRoutes)

//connect to db using mongoose:
mongoose.connect(process.env.MONGO_URI)
    .then(() => {  
        app.listen(process.env.PORT, () => {
            console.log(`Connected to DB & Listening on port ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })


