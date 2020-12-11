const mongoose = require('mongoose');
const recruitSchema = new mongoose.Schema({ 
    notify: {type: Boolean,required: true},
    statusRecruit: {type: String,required: true},
    processRecruit: {type: String,required:true}
})
module.exports= mongoose.model('Recruit', recruitSchema)