const express = require('express')

//controller function
const {singupPlayer,showPlayer,deletePlayer,showPlayeronwait,acceptPlayer,editPlayer,GetOnePlayer} = require('../controllers/playerController')

const router =express.Router()


// signup route
router.post('/playersignup',singupPlayer)

//showplayers team
router.post('/showplayer',showPlayer)

//showplayers team
router.post('/showplayer',showPlayer)

//delete user

router.delete('/deleteplayer',deletePlayer)

//showplayersonwiat

router.get('/showplayeronwait',showPlayeronwait)

//showAcceptPlayer

router.post('/acceptPlayer',acceptPlayer)

//editar player
router.post('/editplayer',editPlayer)

//One player
router.post('/getoneplayer',GetOnePlayer)


module.exports = router