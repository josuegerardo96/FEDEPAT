const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const competitionSchema = new Schema({
    nombre: {
        type: String,
        requiere: true,

    },
    categoria: {
        type: String,
        requiere: true,

    },
    tipo: {
        type: String,
        requiere: true,

    },
    ubicación: {
        type: String,
        requiere: true
    },
    genero: {
        type: String,
        requiere: true
    }
})

// static signup method

competitionSchema.statics.signup = async function (nombre, categoria, tipo, ubicación, genero) {

    //validation
    if (!nombre) {
        throw Error('Debe tener un nombre para la competencia')
    }
    if (!categoria) {
        throw Error('No selecciono categoria')
    }
    if (!tipo) {
        throw Error('No selecciono tipo de patin')
    }
    if (!ubicación) {
        throw Error('no selecciono una provincioa')
    }
    if (!genero) {
        throw Error('No eligio un genero')
    }


    const exists = await this.findOne({ nombre })

    if (exists) {
        throw Error('evento ya existe')
    }

    const competition = await this.create({ nombre, categoria, tipo, ubicación, genero })

    return competition

}



//static edit method

competitionSchema.statics.editcompetencia = async function (_id, nombre, categoria, tipo, ubicación, genero) {

    //validation
    if (!nombre) {
        throw Error('Debe tener un nombre para la competencia')
    }
    if (!categoria) {
        throw Error('No selecciono categoria')
    }
    if (!tipo) {
        throw Error('No selecciono tipo de patin')
    }
    if (!ubicación) {
        throw Error('no selecciono una provincioa')
    }
    if (!genero) {
        throw Error('No eligio un genero')
    }

    const competition = await this.findOneAndUpdate({ _id }, { nombre, categoria, tipo, ubicación, genero })

    return competition

}

//static  show all competition
competitionSchema.statics.showall = async function () {

    const competition = await this.find({}).sort({ createdAt: -1 })
    return competition
}

//static delete competition

competitionSchema.statics.deletecompetencia = async function (_id) {

    const competition = await this.findOneAndDelete({ _id })
    return competition
}


//Conseguir un competition
competitionSchema.statics.getonecompetencia = async function (_id) {

    const competition = await this.findOne({ _id: _id })

    return competition

}






module.exports = mongoose.model('Competition', competitionSchema)