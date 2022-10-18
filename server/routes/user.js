const express = require('express')

//controller function
const {loginUser,singupUser,editUser,showAll,deleteUser,acceptUser,GetOneUser,GetOneUserEmail} = require('../controllers/userCrontroller')


const router =express.Router()

//login route
router.post('/login',loginUser)

// signup route
router.post('/signup',singupUser)

//Edit user route
router.post('/editUser',editUser)

//Mostrar users route

router.get('/getusers',showAll)

//delete user

router.delete('/deleteuser',deleteUser)

//Aceptar Delegados

router.post('/acceptuser',acceptUser)

//Get One User

router.post('/getOneuser',GetOneUser)

//get one user email

router.post('/getOneuseremail',GetOneUserEmail)



module.exports = router