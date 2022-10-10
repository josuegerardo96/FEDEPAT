const express = require('express')

//controller function
const {singupPlayer,showPlayer,deletePlayer,showPlayeronwait,acceptPlayer} = require('../controllers/playerController')

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

module.exports = router