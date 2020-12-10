const mongoose = require('mongoose')
const postulationSchema = new mongoose.Schema({
    titlePostulation: { type: String, required: true },
    description:  { type: String, required: true },
    cargo: { type: String, required: true},
    salary: { type: Number, required: true },
    languaje:{ type: String, required: true }
})


module.exports = mongoose.model('Postulation', postulationSchema)