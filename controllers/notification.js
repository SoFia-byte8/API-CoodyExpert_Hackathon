const NotificationModel =require('../models/notification') //estamos requiriendo el modelo

exports.create = (req, res) => {
    //validamos que todos los datos del formulario esten llenos
    if (Object.entries(req.body).length == 0) {
       return res.status(400).send({
          message: 'los datos son obligatorios'

      })
    }
//vamos a crear una nueva postulacion
    const notification = new NotificationModel({
        statusNotification: req.body.statusNotification,
        messageNotification:  req.body.messageNotification
    })
    


   
    notification.save()// save metodo de mongoose
        .then((datanotification) => { res.send(datanotification) })//si hace esto bien
        .catch((error) => {//si no ejecute el cath
            res.status(500) - send({//estado 500 (error de servidor)
                message: error.message//este mensaje devolvera el error que mongoose tiene 
            })
        })
}

/**
 * Metodo para actualizar una empresa
 */

 exports.update=(req,res)=>{
     //validacion de que todos los campos que se van a actualizar esten llenos 
    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'los datos son obligatorios'

        })
    }

    const notification= {
        statusNotification: req.body.statusNotification,
        messageNotification:  req.body.messageNotification
 }
 //findByIdAndUpdate= metodo de mongoose que permite buscar por id y actualizar
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

/**
 * Metodo para eliminar notificaciones
 */
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


