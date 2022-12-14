
const User = require('../models/userModel')
const jwt = require ('jsonwebtoken')

const createToken = (_id) => {
   return jwt.sign({_id}, process.env.SECRET,{ expiresIn: '3d' })
}

//login user

const loginUser = async(req,res) => {
    const {email, password} = req.body

    try {
        const user = await User.login(email,password)
        // create  a token
        //const token = createToken(user._id)
        const nombre = user.nombre
        const apellidos = user.apellidos
        const telefono = user.telefono

        res.status(200).json({email,nombre,apellidos,telefono, user})
    } catch (error) {
        res.status(400).json({error:error.message})
        
    }

}


//signup user

const singupUser = async(req,res) => {
    const {email, password, rol, nombre, apellidos, telefono,estado} = req.body
    try {
        const user = await User.signup(email,password,rol, nombre, apellidos, telefono,estado)

        // create  a token
        //const token = createToken(user._id)

        res.status(200).json({email, user, nombre, apellidos, telefono})
    } catch (error) {
        res.status(400).json({error:error.message})
        
    }
}


//editUser

const editUser = async(req,res) => {

    const {_id,email,password,nombre, apellidos, telefono} =req.body

    try{
        const user = await User.edituser(_id,email,password,nombre, apellidos, telefono)

        res.status(200).json({email,user,nombre, apellidos, telefono})
    }catch(error){
        res.status(400).json({error:error.message})
    }

}

//show all user

const showAll = async(req,res) => {


    try{
        const users = await User.showall()

        res.status(200).json(users)
    }catch(error){
        res.status(400).json({error:error.message})
    }

}

//Delete user

const deleteUser = async(req,res) => {

    const {email} =req.body

    try{
        const user = await User.deleteuser(email)

        res.status(200).json({email,user})
    }catch(error){
        res.status(400).json({error:error.message})
    }

}

//Aceptar user

const acceptUser = async (req,res) => {
    const {email} =req.body

    try{
        const user = await User.acceptuser(email)

        res.status(200).json({email,user})
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

//get one equipo

const GetOneUser = async (req,res) => {
    const {_id} =req.body

    try{
        const user = await User.getoneuser(_id)

        res.status(200).json({user})
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

const GetOneUserEmail = async (req,res) => {
    const {email} =req.body

    try{
        const user = await User.getoneuseremail(email)

        res.status(200).json({user})
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

module.exports= {loginUser,singupUser,editUser,showAll,deleteUser,acceptUser,GetOneUser,GetOneUserEmail}