//This file in the models folder will give structure/design the schema mongoose will use
const mongoose = require("mongoose")

const Schema = mongoose.Schema  //function to create a new schema

const workoutSchema = new Schema ({     //creatine a schema
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Workout', workoutSchema)