const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator =require('validator')

const Schema = mongoose.Schema

const playerSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true
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
    identificacion:{
        type:String,
        require:true
    },
    gender:{
        type:Boolean,
        requiere:true
    },
    nacimiento: {
        type:Date,
        requiere:true
    },
    equipo:{
        type: String,
        require: true
    },
    estado: {
        type: Boolean,
        require: true

    }

})

// static signup method

playerSchema.statics.signup = async function(email,nombre, apellidos, telefono,identificacion,gender,nacimiento,equipo,estado) {

    //validation
    if(!email || !nombre || !apellidos || !telefono || !identificacion || !nacimiento || !equipo ){
        throw Error('Todos los campos deben estar llenos')
    }

    if(!validator.isEmail(email)){
        throw Error('Email is not valid')
    }

    const exists = await this.findOne({ email })

    if(exists){
        throw Error('Email already in use')
    }

    const player = await this.create({email,nombre, apellidos, telefono,identificacion,gender,nacimiento,equipo,estado})

    return player

}




//static edit method

playerSchema.statics.edituser = async function (_id,email,nombre, apellidos, telefono,identificacion,gender,nacimiento){

    if(!email || !nombre || !apellidos || !telefono || !identificacion || !nacimiento ){
        throw Error('Todos los campos deben estar llenos')
    }

    if(!validator.isEmail(email)){
        throw Error('Email is not valid')
    }

    
    //const exists = await this.findOne({ email })

    //if(exists){
    //    throw Error('Email already in use')
   // }

    const player = await this.findOneAndUpdate({_id},{email,nombre, apellidos, telefono,identificacion,gender,nacimiento})

    return player

}

//static  show all user
playerSchema.statics.showall = async function (_id){
    
    const player = await this.find({equipo: _id}).sort({createdAt: -1}) 
    return player
}

//static delete user

playerSchema.statics.deleteuser = async function (_id){
    
    const player = await this.findOneAndDelete({_id})
    return player
}

//static Accept player

playerSchema.statics.acceptuser = async function (_id){

    
    //const exists = await this.findOne({ email })

    //if(exists){
    //    throw Error('Email already in use')
   // }
    
    const player = await this.findOneAndUpdate({_id},{estado: true})

    return player

}


playerSchema.statics.showonwait = async function (){
    
    const player = await this.find({estado: false}).sort({createdAt: -1}) 
    return player
}


playerSchema.statics.getoneplayer  = async function (_id){

  
    
    const player = await this.findOne({_id:_id})

    return player

}


module.exports = mongoose.model('Player',playerSchema)