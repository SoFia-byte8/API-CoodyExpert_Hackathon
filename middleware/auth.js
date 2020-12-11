const service = require('../services/index')
exports.auth=(req, res, next)=>{
    if(!req.headers.authorization){
    return res.status(400).send({
        message:'No tiene permiso para realizar está acción'
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