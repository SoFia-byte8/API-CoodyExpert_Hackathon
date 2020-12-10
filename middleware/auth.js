const service = require('../services/index')



/**
 * Merodo para validar si la persona tiene una sesion unucuada
 * @param {*} req =>Todos los parametros que se reciben
 * @param {*} res =>Respuesta que se devuelve 
 * @param {*} next => Middleware, Si todo sale bien, se ejecuta el metodo que necesitamos
 */

exports.auth=(req, res, next)=>{
    if(!req.headers.authorization){
        //si no se ha enviado la autorizacion
    return res.status(400).send({
        message: 'No tienes permiso para realizar esta operacion'
    })
    
    }
    const token = req.headers.authorization.split(' ')[1]

    service.decodeToken(token)
    .then(
        (respon)=>{
            req.user=respon
            next()
        }
    )
    .catch(
        (error)=>{
            res.status(error.status).send({
                message:error.message
            })
        }
    )

}