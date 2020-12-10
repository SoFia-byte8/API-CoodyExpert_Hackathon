const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    nameCompany: { type: String, required: true },
    nitCompany: { type: Number, required: true },
    phoneCompany: { type: Number, required: true},
    email: { type: String, required: true, unique: true  },
    password: { type: String, required: true },
    role: { type: String, required: true },
    tipo: { type: String, required: true }
})


module.exports = mongoose.model('Company', companySchema)
