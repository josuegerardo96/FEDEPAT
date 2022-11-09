
const Competition = require('../models/competenciaModel')






//signup user

const singupCompetition = async(req,res) => {
    const {nombre, tipo,provincia, ubicación, fecha} = req.body
    try {
        const competition = await Competition.signup(nombre, tipo,provincia, ubicación, fecha)

        // create  a token
        //const token = createToken(user._id)

        res.status(200).json({nombre, tipo,provincia, ubicación, fecha,competition})
    } catch (error) {
        res.status(400).json({error:error.message})
        
    }
}


//editUser

const editCompetition = async(req,res) => {

    const {_id,nombre, tipo,provincia, ubicación, fecha} =req.body

    try{
        const competition = await Competition.editcompetencia(_id,nombre, tipo,provincia, ubicación, fecha)

        res.status(200).json({nombre, tipo,provincia, ubicación, fecha,competition})
    }catch(error){
        res.status(400).json({error:error.message})
    }

}

//show all user

const showAllCompetition = async(req,res) => {


    try{
        const competition = await Competition.showall()

        res.status(200).json(competition)
    }catch(error){
        res.status(400).json({error:error.message})
    }

}

//Delete user

const deleteCompetition = async(req,res) => {

    const {_id} =req.body

    try{
        const competition = await Competition.deletecompetencia(_id)

        res.status(200).json({_id,competition})
    }catch(error){
        res.status(400).json({error:error.message})
    }

}


//get one equipo

const GetOneCompetition = async (req,res) => {
    const {_id} =req.body

    try{
        const competition = await Competition.getonecompetencia(_id)

        res.status(200).json({competition})
    }catch(error){
        res.status(400).json({error:error.message})
    }
}



module.exports= {singupCompetition,editCompetition,showAllCompetition,deleteCompetition,GetOneCompetition}