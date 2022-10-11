const Player = require('../models/playerModel')
const jwt = require ('jsonwebtoken')

//agregar jugador
const singupPlayer = async(req,res) => {
    const {email,nombre, apellidos, telefono,identificacion,gender,nacimiento,equipo,estado} = req.body
    try {
        const player = await Player.signup(email,nombre, apellidos, telefono,identificacion,gender,nacimiento,equipo,estado)

        // create  a token
        //const token = createToken(user._id)

        res.status(200).json({email,player})
    } catch (error) {
        res.status(400).json({error:error.message})
        
    }
}

//mostrar jugadores

const showPlayer = async(req,res) => {
    const {_id} = req.body
    try{
        const player = await Player.showall(_id)

        res.status(200).json(player)
    }catch(error){
        res.status(400).json({error:error.message})
    }

}

//Delete player

const deletePlayer = async(req,res) => {

    const {_id} =req.body

    try{
        const player = await Player.deleteuser(_id)

        res.status(200).json({player})
    }catch(error){
        res.status(400).json({error:error.message})
    }

}

//enseñar jugadores en espera

const showPlayeronwait = async(req,res) => {
    try{
        const player = await Player.showonwait()

        res.status(200).json(player)
    }catch(error){
        res.status(400).json({error:error.message})
    }

}

//Acceptar jugador

const acceptPlayer = async (req,res) => {
    const {_id} =req.body

    try{
        const player = await Player.acceptuser(_id)

        res.status(200).json({player})
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

//editar jugador
const editPlayer = async(req,res) => {

    const {_id,email,nombre, apellidos, telefono,identificacion,gender,nacimiento} =req.body

    try{
        const player = await Player.edituser(_id,email,nombre, apellidos, telefono,identificacion,gender,nacimiento)

        res.status(200).json({player})
    }catch(error){
        res.status(400).json({error:error.message})
    }

}
//one jugador

const GetOnePlayer = async (req,res) => {
    const {_id} =req.body

    try{
        const player = await Player.getoneplayer(_id)

        res.status(200).json({player})
    }catch(error){
        res.status(400).json({error:error.message})
    }
}
module.exports= {singupPlayer,showPlayer,deletePlayer,showPlayeronwait,acceptPlayer,editPlayer,GetOnePlayer}