const jwt=require('jwt-simple')
const moment=require('moment')
const config=require('../config')
const SECRET=config.keyToke

exports.createToken=(dataUser)=>{

    //payload informacion del usuario
    const payload={
        /**
         * sub: ca a guardar identificador del usuario
         * Unix()= Se convierte en numero
         */
        sub:dataUser._id,
        iat:moment().unix(),//fecha en la que se creo el token
        exp:moment().add('1','hour').unix(),//fecha y hora de expiracion del token
  
        firstName:dataUser.firstName,
        lastName:dataUser.lastName,
        email:dataUser.email,
        password:dataUser.password,
        phone:dataUser.phone,
    }
//ecode()= coger informacion y codificarla
    return jwt.encode(payload, SECRET)
}

/**
 * Metodo para decodificar o desencriptar
 */
exports.decodeToken=(token)=>{
    const decode = new Promise((resolve, reject) =>{
/**
 * Es una forma en la cual si el codigo falla podemos coger 
 * el error y mostrarlo sin que el fuuncionamiento de mi
 * aplicacion se vea afectada
 * 
 * try= para validar que si el token existe 
 * que si la fecha esta vacia etc
 * 
 * catch= cuando sale un error en el codigo que esta en el try
 * automaticamente entra al cath y recive el error 
 */


try{
    const payload = jwt.decode(token, SECRET)//Traducir el token

    //Validamos fechas
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

       
  