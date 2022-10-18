const mongoose = require('mongoose')
const validator =require('validator')

const Schema = mongoose.Schema

const imageSchema = new Schema({
    name:String,
    categoria: String,
    user:String,
    img:{
        data: Buffer,
        contentType: String,

    },
})


module.exports = mongoose.model('Image',imageSchema)