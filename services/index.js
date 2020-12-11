const jwt=require('jwt-simple')
const moment=require('moment')
const config=require('../config')
const SECRET=config.keyToke

exports.createToken=(dataUser)=>{
    const payload={
        sub:dataUser._id,
        iat:moment().unix(),//fecha en la que se creo el token
        exp:moment().add('1','hour').unix(),//fecha y hora de expiracion del token
        firstName:dataUser.firstName,
        lastName:dataUser.lastName,
        email:dataUser.email,
        password:dataUser.password,
        phone:dataUser.phone,
    }
    return jwt.encode(payload, SECRET)
}
exports.decodeToken=(token)=>{
    const decode = new Promise((resolve, reject) =>{
try{
    const payload = jwt.decode(token, SECRET)
    if(payload.exp <=moment().unix()){
        reject({
            status:401,
            message:'El Token ha expirado'
        })
    }
    resolve(payload.sub)
}catch{
    reject ({
        status:500,
        message:'El Token es invalido'
    })
}
})
return decode
}

       
  