const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({ //creacion de un nuevo objeto en mongo
    statusNotification: {type: Boolean, required: true},
    messageNotification: {type: String, required: true}, 
})

module.exports= mongoose.model('notification', notificationSchema)