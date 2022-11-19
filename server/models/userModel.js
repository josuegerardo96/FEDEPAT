const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator =require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    rol:{
        type:String,
        requiere:true,

    },
    nombre:{
        type:String,
        requiere:true,

    },
    apellidos:{
        type:String,
        requiere:true,

    },
    telefono:{
        type:String,
        requiere:true,

    },
    estado:{
        type:Boolean,
        requiere:true
    }
})

// static signup method

userSchema.statics.signup = async function(email, password, rol, nombre, apellidos, telefono,estado) {

    //validation
    if(!email || !password || !nombre || !apellidos || !telefono){
        throw Error('Todos los campos deben estar llenos')
    }
    if(!validator.isEmail(email)){
        throw Error('Email is not valid')
    }
    if (!validator.isStrongPassword(password)){
        throw Error('Password not strong enough')
    }
    
    const exists = await this.findOne({ email })

    if(exists){
        throw Error('Email already in use')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password,salt)

    const user = await this.create({email, password: hash, rol, nombre, apellidos, telefono,estado})

    return user

}

// static login method 
userSchema.statics.login = async function(email,password){
    if(!email || !password){
        throw Error('All fields must be filled')
    }

    const user = await this.findOne({ email })
    

    if(!user){
        throw Error('Incorrect email')
    }


    const match = await bcrypt.compare(password,user.password)

    if(!match){
        throw Error ('Incorrect password')
    }

    if(!user.estado){
        throw Error('No ha sido acceptado aún, Intente más tarde')
    }

  

    return user
}

//static edit method

userSchema.statics.edituser = async function (_id,email,password,nombre, apellidos, telefono){

    if(!email || !password || !nombre || !apellidos || !telefono){
        throw Error('Todos los campos deben estar llenos')
    }

    if(!validator.isEmail(email)){
        throw Error('Email is not valid')
    }
    if (!validator.isStrongPassword(password)){
        throw Error('Password not strong enough')
    }
    
    //const exists = await this.findOne({ email })

    //if(exists){
    //    throw Error('Email already in use')
   // }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password,salt)
    
    const user = await this.findOneAndUpdate({_id},{email,password: hash,nombre,apellidos,telefono})

    return user

}

//static  show all user
userSchema.statics.showall = async function (){
    
    const users = await this.find({}).sort({createdAt: -1}) 
    return users
}

//static delete user

userSchema.statics.deleteuser = async function (email){
    
    const user = await this.findOneAndDelete({email})
    return user
}

userSchema.statics.acceptuser = async function (email){

    
    //const exists = await this.findOne({ email })

    //if(exists){
    //    throw Error('Email already in use')
   // }
    
    const user = await this.findOneAndUpdate({email},{estado: true})

    return user

}

//Conseguir un equipo
userSchema.statics.getoneuser  = async function (_id){

    
    //const exists = await this.findOne({ email })

    //if(exists){
    //    throw Error('Email already in use')
   // }
    
    const user = await this.findOne({_id:_id})

    return user

}

//uno con email

userSchema.statics.getoneuseremail  = async function (email){

    
    //const exists = await this.findOne({ email })

    //if(exists){
    //    throw Error('Email already in use')
   // }
    
    const user = await this.findOne({email:email})

    return user

}


module.exports = mongoose.model('User',userSchema)