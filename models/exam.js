const mongoose = require('mongoose')
const examSchema = new mongoose.Schema({
    examTitle: {type: String, required: true},
    examDescription: {type: String, required: true},
    examLanguage: {type: String, required:true},
    examLink: {type:String, required:true},
    job:{ type:String, required:true},
    salary:{ type:String, required: true},
    company:{type: mongoose.Schema.Types.ObjectId, ref: 'Company'}
})
module.exports = mongoose.model('Exam', examSchema)