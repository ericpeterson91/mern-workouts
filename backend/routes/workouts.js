const express = require('express')
const { 
    createWorkout,
    getWorkout,
    getWorkouts
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
router.delete('/:id', (req, res) =>{
    res.json({msg: 'Delete a workout'})
})

//Update a workout
router.patch('/:id', (req, res) =>{
    res.json({msg: 'Update a workout'})
})

module.exports = router