const mongoose = require('mongoose')


const Schema = mongoose.Schema

const competitionSchema = new Schema({
    nombre: {
        type: String,
        requiere: true,

    },
    tipo: {
        type: String,
        requiere: true,

    },
    provincia: {
        type: String,
        requiere: true
    },
    ubicación: {
        type: String,
        requiere: true
    },
    fecha:{
        type:Date,
        requiere: true
    }
})

// static signup method

competitionSchema.statics.signup = async function (nombre, tipo,provincia, ubicación, fecha) {

    //validation
    if (!nombre) {
        throw Error('Debe tener un nombre para la competencia')
    }
    if (!provincia) {
        throw Error('No selecciono provincia')
    }
    if (!tipo) {
        throw Error('No selecciono tipo de patin')
    }
    if (!ubicación) {
        throw Error('no increso una ubicacion')
    }
    if (!fecha) {
        throw Error('No eligio una fecha de inicio')
    }


    const exists = await this.findOne({ nombre })

    if (exists) {
        throw Error('evento ya existe')
    }

    const competition = await this.create({ nombre, provincia, tipo, ubicación, fecha })

    return competition

}



//static edit method

competitionSchema.statics.editcompetencia = async function (_id, nombre, tipo,provincia, ubicación, fecha) {

    //validation
    if (!nombre) {
        throw Error('Debe tener un nombre para la competencia')
    }
    if (!provincia) {
        throw Error('No selecciono categoria')
    }
    if (!tipo) {
        throw Error('No selecciono tipo de patin')
    }
    if (!ubicación) {
        throw Error('no selecciono una provincioa')
    }
    if (!fecha) {
        throw Error('No eligio un genero')
    }

    const competition = await this.findOneAndUpdate({ _id }, { nombre, tipo,provincia, ubicación, fecha })

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