const UserModel = require('../models/user');
const service = require('../services/index')
/**
 * Metodo para almacenal un nuevo usuario 
 * @param {*} req => todo lo que enviamos desde el dody (formulario)
 * @param {*} res => la respuesta que se devolvera 
 */
exports.create = (req, res) => {
    /**
     * El sisgno de admiracion (!) antede de la condicion  significa que estamos negando la condicion
     */

    if (Object.entries(req.body).length == 0) {
        // console.log('esta llegando')
        return res.status(400).send({
            message: 'Los datos son obligatorios.'
        })
    }

    const user = new UserModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        role: req.body.role,
        tipo: req.body.tipo

    })

    user.save().then((dataUser) => {
        res.send(dataUser)
    }).catch((error) => {
        res.status(500).send({
            message: error.message

        })
    })
}
/**
 * Metodo para actualizar el usuario 
 * @param {*} req =>todo lo que enviamos desde el dody (formulario)
 * @param {*} res =>la respuesta que se devolvera
 */
exports.update = (req, res) => {
    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'Los datos son obligatorios.'
        })
    }

    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        email: req.body.email,
        phone: req.body.phone,
        role: req.body.role,
        tipo: req.body.tipo

    }
    
    UserModel.findByIdAndUpdate(req.params.id, user)
        .then(
            (userUpdate) => {
                res.send(userUpdate)
            }
        ).catch(
            (error) => {
                res.status(500).send({
                    message: error.message
                })
            }
        )
}

exports.getAll = (req, res) => {
    UserModel.find()
        .then((users) => {
            res.send(users)
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message
            })
        })

}

exports.getOne = (req, res) => {
    // console.log('aqui ta')
    UserModel.findById(req.params.id)
       
        .then((user) => {
            res.send(user)
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message
            })
        })
}

exports.deleteOne=(req,res)=>{
    UserModel.findByIdAndRemove(req.params.id)
    .then((userdelete) => {
        res.send(userdelete)
    })
    .catch((error) => {
        res.status(500).send({
            message: error.message
        })
    })
    }

exports.login= (req, res) =>{
    UserModel.findOne({email:req.body.email},(error, dataUser)=>{
        if (dataUser != null) {
            if (dataUser.password == req.body.password) {
                res.send({token: service.createToken(dataUser)})    
            }else{
                res.status(400).send({
                    message: 'Los datos no coinciden'
                })
            }
            
        }else{
            res.status(400).send({
                message: 'Los datos no coinciden'
            })
        }
    })
}