const NotificationModel =require('../models/notification') 
exports.create = (req, res) => {
    if (Object.entries(req.body).length == 0) {
        
       return res.status(400).send({
          message: 'Los datos son obligatorios.'
      })
    }
    const notification = new NotificationModel({
        statusNotification: req.body.statusNotification,
        messageNotification:  req.body.messageNotification
    })
    notification.save()
        .then((datanotification) => { res.send(datanotification) })
        .catch((error) => {
            res.status(500) - send({
                message: error.message
            })
        })
}
 exports.update=(req,res)=>{
    if (Object.entries(req.body).length == 0) {

        return res.status(400).send({
            message: 'Los datos son obligatorios.'
        })
    }
    const notification= {
        statusNotification: req.body.statusNotification,
        messageNotification:  req.body.messageNotification
 }
 NotificationModel.findByIdAndUpdate(req.params.id, notification)
        .then(
            (notificationUpdate) => {
                res.send(notificationUpdate)
            }
        ).catch(
            (error) => {
                res.status(500).send({
                    message: error.message
                })
            }
        )
}
exports.deleteOne=(req,res)=>{
    NotificationModel.findByIdAndRemove(req.params.id)
    .then(( deletenotificacion) => {
        res.send( deletenotificacion)
    })
    .catch((error) => {
        res.status(500).send({
            message: error.message
        })
    })
    }