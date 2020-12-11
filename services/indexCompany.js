const jwt = require('jwt-simple')
const moment = require('moment')
const config = require('../config')
const SECRET = config.keyToken
exports.createToken = (dataCompany) => {
    const payload = {
        sub: dataCompany._id,
        iat: moment().unix(),
        exp: moment().add('1', 'hour').unix(),
        nameCompany: dataCompany.nameCompany,
        nitCompany: dataCompany.nitCompany,
        phoneCompany: dataCompany.phoneCompany,
        email: dataCompany.email,
        password: dataCompany.password,
    }

    return jwt.encode(payload, SECRET)
}
exports.decodeToken = (token) => {
    const decode = new Promise((resolve, reject) => {
        try {
            const payload = jwt.decode(token, SECRET)
            if (payload.exp <= moment().unix()) {
                reject({
                    status: 401,
                    message: 'El Token ha expirado'
                })
            }
            resolve(payload.sub)
        } catch {
            reject({
                status: 500,
                message: 'El Token es invalido'
            })
        }
    })

    return decode
}


