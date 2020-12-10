const mongoose = require('mongoose')

const examSchema = new mongoose.Schema({
    tituloExamen: {type: String, required: true},
    descripcionExamen: {type: String, required: true},
    lenguajeExamen: {type: String, required:true},
    linkExamen: {type:String, required:true},
    cargo:{ type:String, required:true},
    salario:{ type:String, required: true},
    empresa:{type: mongoose.Schema.Types.ObjectId, ref: 'Company'}
})
module.exports = mongoose.model('Exam', examSchema)


