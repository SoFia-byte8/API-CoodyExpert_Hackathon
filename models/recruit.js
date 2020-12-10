const mongoose = require('mongoose');

const recruitSchema = new mongoose.Schema({ 
    notificar: {type: Boolean,required: true},
    estadoPstulante: {type: String,required: true},
    procesoPostulante: {type: String,required:true}
})

module.exports= mongoose.model('Recruit', recruitSchema)