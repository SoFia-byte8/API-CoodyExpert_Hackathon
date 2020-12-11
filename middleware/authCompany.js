const service = require('../services/indexCompany')
exports.authCompany=(req, res, next)=>{
    if(!req.headers.authorization){

    return res.status(400).send({
        message: 'No tienes permiso para realizar esta operacion'
    })}
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