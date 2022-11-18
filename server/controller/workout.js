const e = require('express');
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');


// connect with workoutTrain

let Workout = require('../models/workouts');

/* CRUD Operartion*/

module.exports.displayworkoutList = (req,res,next)=>{
    Workout.find((err, workoutlist)=>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(workoutList);
            res.render('workout/list',{
                title:"Workouts", 
                workoutList: workoutlist
            });
        }
    });
}

module.exports.displayAddPage = (req,res,next)=>{
    res.render('workout/add',{title:'Add Workout'})
}

module.exports.processAddPage = (req,res,next)=>{
    let newWorkout = Workout ({
        "name":req.body.name,
        "target":req.body.target,
        "weight":req.body.weight,
        "reps":req.body.reps
    });
    Workout.create(newWorkout,(err,Workout) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/workoutList');
        }
    });
}

module.exports.displayEditPage = (req,res,next)=>{
    let id = req.params.id;
    Workout.findById(id,(err,workoutToEdit)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('workout/edit',{title: 'Edit Workout', workout:workoutToEdit});
        }
    });
}

module.exports.processEditPage = (req,res,next)=>{
    let id = req.params.id;
    let updateWorkout = Workout({
        "_id":id,
        "name":req.body.name,
        "target":req.body.target,
        "weight":req.body.weight,
        "reps":req.body.reps
    });
    Workout.updateOne({_id:id},updateWorkout,(err) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/workoutList');
        }
    });
}

module.exports.performDelete = (req,res,next)=>{
    let id = req.params.id;
    Workout.deleteOne({_id:id},(err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/workoutList');
        }
    });
}