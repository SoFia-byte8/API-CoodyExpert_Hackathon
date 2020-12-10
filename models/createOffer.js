const mongoose = require('mongoose');

const createOfferSchema = new mongoose.Schema({ 
    title: {type: String,required: true},
    description: {type: String,required: true},
    charge: {type: String,required: true, unique: true},
    salary: {type: Number},
    location:{type:String, required:true},
    endDate:{type:Date,required:true}
})

module.exports= mongoose.model('CreateOffer', createOfferSchema)