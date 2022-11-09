const mongoose = require('mongoose')


const Schema = mongoose.Schema

const registrocompSchema = new Schema({
    competencia: {
        type: String,
        requiere: true,

    },
    jugador: {
        type: String,
        requiere: true,

    },
    categoria: {
        type: String,
        requiere: true
    }
})

// static signup method

registrocompSchema.statics.signup = async function (competencia, jugador,categoria) {

    //validation
    if (!competencia) {
        throw Error('Debe tener una competencia')
    }
    if (!jugador) {
        throw Error('Debe tener una jugador')
    }
    if (!categoria) {
        throw Error('Debe tener una categoria')
    }

    const exists = await this.findOne({ competencia: competencia , jugador: jugador })

    if (exists) {
        throw Error('Jugador ya en evento ')
    }


    const competition = await this.create({ competencia, jugador, categoria })

    return competition

}



registrocompSchema.statics.editregistro = async function (_id,competencia, jugador,categoria) {

    //validation
    if (!competencia) {
        throw Error('Debe tener una competencia')
    }
    if (!jugador) {
        throw Error('Debe tener una jugador')
    }
    if (!categoria) {
        throw Error('Debe tener una categoria')
    }


    const competition = await this.findOneAndUpdate({ _id }, { competencia, jugador,categoria })

    return competition

}


registrocompSchema.statics.showall = async function () {

    const competition = await this.find({}).sort({ createdAt: -1 })
    return competition

}

registrocompSchema.statics.showallcompetition = async function (competencia) {

    const competition = await this.find({competencia}).sort({ createdAt: -1 })
    return competition

}

registrocompSchema.statics.deleteregistro = async function (_id) {

    const competition = await this.findOneAndDelete({ _id })
    return competition
}

registrocompSchema.statics.getoneregistro = async function (_id) {

    const competition = await this.findOne({ _id: _id })

    return competition

}

registrocompSchema.statics.getlistajugadoresComp = async function (jugador,competencia) {

    const competition =  await this.findOne({ competencia: competencia , jugador: jugador })

    return competition

}

registrocompSchema.statics.deleteallcomp = async function (competencia) {

    const competition =  await this.deleteMany({ competencia })

    return competition

}



module.exports = mongoose.model('Regristrocomp', registrocompSchema)