let mongoose = require('mongoose');
// create a workout model
let workoutTrain = mongoose.Schema({
    name: String,
    target: String,
    weight: String,
    reps: String
    },
    {
        collection: "workouts"
    }
);

/* Schema for the database */
module.exports = mongoose.model('workouts', workoutTrain);

