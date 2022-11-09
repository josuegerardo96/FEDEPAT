const Competition = require('../models/registrocompModel')

//signup user

const registrocomp = async(req,res) => {
    const {competencia, jugador,categoria} = req.body
    try {
        const competition = await Competition.signup(competencia, jugador,categoria)

        // create  a token
        //const token = createToken(user._id)

        res.status(200).json({competencia, jugador,categoria,competition})
    } catch (error) {
        res.status(400).json({error:error.message})
        
    }
}


const editregistrocomp = async(req,res) => {

    const {_id,competencia, jugador,categoria} =req.body

    try{
        const competition = await Competition.editregistro(_id,competencia, jugador,categoria)

        res.status(200).json({competencia, jugador,categoria,competition})
    }catch(error){
        res.status(400).json({error:error.message})
    }

}


const showallregristro = async(req,res) => {

    try{
        const competition = await Competition.showall()

        res.status(200).json(competition)
    }catch(error){
        res.status(400).json({error:error.message})
    }


}

const showallregristrocompetencia = async(req,res) => {

    const {competencia} =req.body

    try{
        const competition = await Competition.showallcompetition(competencia)

        res.status(200).json(competition)
    }catch(error){
        res.status(400).json({error:error.message})
    }


}


const deleteregistro = async(req,res) => {

    const {_id} =req.body

    try{
        const competition = await Competition.deleteregistro(_id)

        res.status(200).json({_id,competition})
    }catch(error){
        res.status(400).json({error:error.message})
    }

}



const GetOneregistro = async (req,res) => {
    const {_id} =req.body

    try{
        const competition = await Competition.getoneregistro(_id)

        res.status(200).json({competition})
    }catch(error){
        res.status(400).json({error:error.message})
    }
}


const GetListaJugadoresComp = async (req,res) => {
    const {jugador,competencia} =req.body

    try{
        const competition = await Competition.getlistajugadoresComp(jugador,competencia)

        res.status(200).json({competition})
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

const Deleteallcomp = async(req,res) => {

    const {competencia} =req.body

    try{
        const competition = await Competition.deleteallcomp(competencia)

        res.status(200).json({competencia,competition})
    }catch(error){
        res.status(400).json({error:error.message})
    }

}


module.exports= {registrocomp,editregistrocomp,showallregristro,showallregristrocompetencia,deleteregistro,GetOneregistro,GetListaJugadoresComp,Deleteallcomp}