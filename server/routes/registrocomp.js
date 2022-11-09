const express = require('express')

//controller function
const {registrocomp,editregistrocomp,showallregristro,showallregristrocompetencia,deleteregistro,GetOneregistro,GetListaJugadoresComp,Deleteallcomp} = require('../controllers/registrocompController')


const router =express.Router()


// signup Competition
router.post('/registrocomp',registrocomp)

router.post('/editCompetition',editregistrocomp)

router.get('/showallregristro',showallregristro)

router.post('/showallregristrocompetencia',showallregristrocompetencia)


router.delete('/deleteregistro',deleteregistro)

router.post('/GetOneregistro',GetOneregistro)

router.post('/GetListaJugadoresComp',GetListaJugadoresComp)

router.delete('/Deleteallcomp',Deleteallcomp)

module.exports = router