
const User = require('../models/userModel')
const jwt = require ('jsonwebtoken')

const createToken = (_id) => {
   return jwt.sign({_id}, process.env.SECRET,{ expiresIn: '3d' })
}

//login user

const loginUser = async(req,res) => {
    const {email, password, nombre, apellidos, telefono} = req.body

    try {
        const user = await User.login(email,password,nombre, apellidos, telefono)

        // create  a token
        //const token = createToken(user._id)

        res.status(200).json({email, user, nombre, apellidos, telefono})
    } catch (error) {
        res.status(400).json({error:error.message})
        
    }

}


//signup user

const singupUser = async(req,res) => {
    const {email, password, rol, nombre, apellidos, telefono} = req.body
    try {
        const user = await User.signup(email,password,rol, nombre, apellidos, telefono)

        // create  a token
        //const token = createToken(user._id)

        res.status(200).json({email, user, nombre, apellidos, telefono})
    } catch (error) {
        res.status(400).json({error:error.message})
        
    }
}


//editUser

const editUser = async(req,res) => {

    const {_id,email,password} =req.body

    try{
        const user = await User.edituser(_id,email,password)

        res.status(200).json({email,user})
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

module.exports= {loginUser,singupUser,editUser,showAll,deleteUser}