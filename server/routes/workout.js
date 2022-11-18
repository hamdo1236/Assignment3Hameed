const e = require('express');
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect with workoutTrain

let Workout = require('../models/workouts');
let workoutController = require('../controller/workout');
/* CRUD Operartion*/


/* Read Operation */
/* Get route for workout list */

router.get('/', workoutController.displayworkoutList);

/* Add Operation */
/* Get route for displaying the Add-Page -- Create Operation*/
router.get('/add', workoutController.displayAddPage);
/* Post route for processing the Add-Page -- Create Operation*/
router.post('/add', workoutController.processAddPage);


/* Edit Operation */
/* Get route for displaying the Edit Operation -- Update Operation*/
router.get('/edit/:id', workoutController.displayEditPage);
/* Post route for displaying the Edit Operation -- Update Operation*/
router.post('/edit/:id', workoutController.processEditPage);


/* Delete Operation*/
/* Get to perform delete operation -- Deletion*/
router.get('/delete/:id', workoutController.performDelete);


module.exports=router;

