const express = require('express')

//controller function
const {singupCompetition,editCompetition,showAllCompetition,deleteCompetition,GetOneCompetition} = require('../controllers/competitionController')


const router =express.Router()


// signup Competition
router.post('/singupCompetition',singupCompetition)

//Edit Competition route
router.post('/editCompetition',editCompetition)

//Mostrar Competition route

router.post('/showAllCompetition',showAllCompetition)

//delete Competition

router.delete('/deleteCompetition',deleteCompetition)


//Get One User

router.post('/GetOneCompetition',GetOneCompetition)






module.exports = router