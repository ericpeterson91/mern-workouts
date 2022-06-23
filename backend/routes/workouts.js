const express = require('express')
const { 
    createWorkout,
    getWorkout,
    getWorkouts,
    updateWorkout,
    deleteWorkout
} = 
require('../controllers/workoutController')

const router = express.Router()

//get all workouts
router.get('/', getWorkouts)

//get single workout
router.get('/:id', getWorkout)

// post a new workout
router.post('/', createWorkout)

//Delete a workout
router.delete('/:id', deleteWorkout)

//Update a workout
router.patch('/:id', updateWorkout)

module.exports = router