const mongoose = require('mongoose');
const notificationSchema = new mongoose.Schema({
    statusNotification: {type: Boolean, required: true},
    messageNotification: {type: String, required: true}, 
})
module.exports= mongoose.model('notification', notificationSchema)